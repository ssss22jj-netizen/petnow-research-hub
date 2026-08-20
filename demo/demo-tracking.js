(function () {
  /* Mixpanel snippet — loads async, queues calls until ready */
  (function (c, a) {
    if (!a.__SV) {
      var b, e, i, g;
      window.mixpanel = a;
      b = c.createElement('script'); b.type = 'text/javascript'; b.async = true;
      b.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
      g = c.getElementsByTagName('script')[0]; g.parentNode.insertBefore(b, g);
      a._i = []; a.init = function (b, c, f) {
        function d(a, b) { var c = b.split('.'); 2 == c.length && (a = a[c[0]], b = c[1]); a[b] = function () { a.push([b].concat(Array.prototype.slice.call(arguments, 0))); }; }
        var g = a; 'undefined' !== typeof f ? g = a[f] = [] : f = 'mixpanel'; g.people = g.people || []; g.toString = function (a) { var b = 'mixpanel'; 'mixpanel' !== f && (b += '.' + f); a || (b += ' (stub)'); return b; }; g.people.toString = function () { return g.toString(1) + '.people (stub)'; };
        i = 'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once unregister identify alias individuals people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(' ');
        for (e = 0; e < i.length; e++) d(g, i[e]);
        a._i.push([b, c, f]);
      }; a.__SV = 1.2;
    }
  })(document, window.mixpanel || []);

  var MP_TOKEN = '77426ba0438bad37f8ac6a0f127a1af5'; // Live
  var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZ6AF3L4PIAXUGBz5PNTwj60f--PXLypho2HvRJapGbYRRaXQiPI1utfF0gLguNqsigw/exec';

  var params = new URLSearchParams(location.search);
  var ref = params.get('ref') || '';
  var via = params.get('via') || '';

  mixpanel.init(MP_TOKEN, { debug: true });
  mixpanel.register({ referrer_id: ref });

  /* app.js reads this synchronously to decide whether to render the Share button */
  window.demoRef = ref;
  window.demoVia = via;

  /* ------------------------------------------------------------- engagement gate
   * A referral link is a URL sitting in the leads sheet, and Google fetches those
   * from its own data centres. On 2026-08-19 that produced 17 of the first 27
   * "Demo Viewed" events — 14 of them in a four-second burst — before a single
   * link had been emailed to anybody. Locations were Council Bluffs, Moncks
   * Corner, Lenoir and São Paulo: Google regions, every one.
   *
   * A crawler renders the page and leaves at once, so nothing is reported until
   * the visitor has proved they are still here — three seconds with the tab in
   * front, or one touch of the page, whichever lands first. The sheet counter and
   * the Mixpanel event share this gate so the two numbers stay comparable.
   */
  var ENGAGE_MS = 3000;
  var WAKE_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
  var reported = false;
  var timer = null;

  function stopWatching() {
    if (timer) { clearTimeout(timer); timer = null; }
    WAKE_EVENTS.forEach(function (name) {
      window.removeEventListener(name, report, true);
    });
    document.removeEventListener('visibilitychange', onVisibility);
  }

  /* A backgrounded tab is not a visitor reading the page, and its timers are
     throttled anyway, so the clock only runs while the tab is in front. */
  function startTimer() {
    if (timer || reported) return;
    timer = setTimeout(report, ENGAGE_MS);
  }

  function onVisibility() {
    if (document.hidden) {
      if (timer) { clearTimeout(timer); timer = null; }
    } else {
      startTimer();
    }
  }

  function report() {
    if (reported) return;
    reported = true;
    stopWatching();

    mixpanel.track('Demo Viewed');
    if (!ref) return;

    /* one sheet count per session per ref — a reread is not a second visitor */
    var action = via === 'share' ? 'demo_share_view' : 'demo_view';
    var ssKey = 'demo:' + ref + ':' + action;
    try {
      if (sessionStorage.getItem(ssKey)) return;
      sessionStorage.setItem(ssKey, '1');
    } catch (err) {
      /* storage blocked — better to risk counting twice than to lose the visit */
    }

    /* keepalive so the count survives a visitor who leaves the moment it fires */
    fetch(APPS_SCRIPT_URL + '?action=' + action + '&ref=' + encodeURIComponent(ref),
      { mode: 'no-cors', keepalive: true }).catch(function () {});
  }

  WAKE_EVENTS.forEach(function (name) {
    window.addEventListener(name, report, true);
  });
  document.addEventListener('visibilitychange', onVisibility);
  if (!document.hidden) startTimer();

  window.demoTrack = function (eventName, props) {
    /* any tracked action is proof of a visitor, so it opens the gate on its way */
    report();
    mixpanel.track(eventName, props || {});
  };

  /* Called by app.js Share button handler */
  window.demoHandleShare = function () {
    if (!ref) return;
    var shareUrl = location.origin + location.pathname + '?ref=' + encodeURIComponent(ref) + '&via=share';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).catch(function () {});
    } else {
      try {
        var inp = document.createElement('input');
        inp.value = shareUrl; document.body.appendChild(inp);
        inp.select(); document.execCommand('copy');
        document.body.removeChild(inp);
      } catch (e) {}
    }
    report();
    mixpanel.track('Demo Share Clicked');
    /* share_clicks: no session guard — each click is intentional */
    fetch(APPS_SCRIPT_URL + '?action=demo_share_click&ref=' + encodeURIComponent(ref),
      { mode: 'no-cors', keepalive: true }).catch(function () {});
  };
})();
