(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  0: function _(a, t, i) {
    i("EVdn"), i("pVw5"), i("t6D/"), a.exports = i("6M8w");
  },
  "6M8w": function M8w(a, t, i) {
    (function (a) {
      i("MIQu");
      a(document).ready(function (a) {
        a(".kaltura-threeplay").each(function (t) {
          if (a(this).attr("id") ? (a(this).replaceWith('<div class="video" id="video' + t + '"><div class="kaltura-player-container">\x3c!--  maintain 16/9 aspect ratio: --\x3e<div class="kaltura-player-container-absolute"><div id="kaltura_player" style="width:712px; height: 401px;"></div></div></div></div>'), mw.setConfig("EmbedPlayer.EnableIpadHTMLControls", !1), mw.setConfig("EmbedPlayer.WebKitPlaysInline", !0), kWidget.embed({
            targetId: "kaltura_player",
            flashvars: {
              autoPlay: !1
            },
            wid: "_1446471",
            uiconf_id: "30101351",
            entry_id: a(this).attr("id")
          })) : a(this).replaceWith('<div class="video" id="video' + t + '"></div>'), a(this).attr("title") && (p3_api_key = "", p3_window_wait = !1, a("#video" + t).append('<div id="transcript_' + a(this).attr("title") + '"></div>'), "undefined" == typeof p3_instances && (p3_instances = {}), p3_instances.kaltura_player || (p3_instances.kaltura_player = {
            file_id: a(this).attr("title"),
            player_type: "kaltura",
            api_version: "simple",
            project_id: "11439",
            platform_integration: !1
          }), p3_instances.kaltura_player.transcript = {
            target: "transcript_" + a(this).attr("title"),
            width: "712",
            height: "290",
            skin: "minimalist",
            can_collapse: !0,
            progressive_tracking: !0,
            can_print: !0,
            can_download: !0,
            download_format: "pdf"
          }, "undefined" == typeof p3_is_loading || !p3_is_loading)) {
            p3_is_loading = !0, a("#video" + t).append('<div id="p3-js-main-root"></div>');
            var i = document.createElement("script");
            i.async = !0, i.src = "//p3.3playmedia.com/p3.js", document.getElementById("p3-js-main-root").appendChild(i);
          }
        }), a("#tabs, .tabs").tabs();
      });
    }).call(this, i("EVdn"));
  },
  "t6D/": function t6D(a, t) {
    var i, e, n, s, d, r;
    i = window, e = document, n = "script", s = "ga", i.GoogleAnalyticsObject = s, i.ga = i.ga || function () {
      (i.ga.q = i.ga.q || []).push(arguments);
    }, i.ga.l = 1 * new Date(), d = e.createElement(n), r = e.getElementsByTagName(n)[0], d.async = 1, d.src = "//www.google-analytics.com/analytics.js", r.parentNode.insertBefore(d, r), ga("create", "UA-64317003-1", "auto"), ga("require", "displayfeatures"), ga("require", "linkid", "linkid.js"), ga("send", "pageview");
  }
}, [[0, 1, 2]]]);
