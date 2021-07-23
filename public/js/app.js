(self["webpackChunk_harvardchanschool_canvas_theme"] = self["webpackChunk_harvardchanschool_canvas_theme"] || []).push([["/public/js/app"],{

/***/ "./js/blue-explorance.js":
/*!*******************************!*\
  !*** ./js/blue-explorance.js ***!
  \*******************************/
/***/ (function() {

window.BLUE_CANVAS_SETUP = {
  // eslint-disable-line no-unused-vars
  connectorUrl: 'https://harvard.bluera.com/harvardBlueConnector/',
  canvasAPI: 'https://canvas.harvard.edu',
  domainName: 'com.explorance',
  consumerID: 'uneAb3wY2QaWRG4D4S117w==',
  defaultLanguage: 'en-us'
};
var BlueCanvasJS = document.createElement('script');
BlueCanvasJS.setAttribute('type', 'text/javascript');
BlueCanvasJS.setAttribute('src', 'https://harvard.bluera.com/harvardBlueConnector//Scripts/Canvas/BlueCanvas.min.js?' + new Date().getTime());
document.getElementsByTagName('head')[0].appendChild(BlueCanvasJS);

/***/ }),

/***/ "./js/google.js":
/*!**********************!*\
  !*** ./js/google.js ***!
  \**********************/
/***/ (function() {

var hsphGoogleAnalytics = function hsphGoogleAnalytics() {
  // Include Google Analytics code for page tracking.
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-64317003-1', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');
}; // Start the app through its main entry point.


hsphGoogleAnalytics();

/***/ }),

/***/ "./js/kalturathreeplay.js":
/*!********************************!*\
  !*** ./js/kalturathreeplay.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function hsphKalturaThreePlay() {
  // Check that we are ready to go.
  jQuery(document).ready(function ($) {
    // Jquery has been loaded so we can now use it.
    $('.kaltura-threeplay').each(function (index) {
      // lets see if we have a kaltura attribute
      if ($(this).attr('id')) {
        $(this).replaceWith('<div class="video" id="video' + index + '"><div class="kaltura-player-container"><!--  maintain 16/9 aspect ratio: --><div class="kaltura-player-container-absolute"><div id="kaltura_player" style="width:712px; height: 401px;"></div></div></div></div>'); // Kwidget Embed code to load the kaltura player.

        /* global mw:true */

        mw.setConfig('EmbedPlayer.EnableIpadHTMLControls', false);
        mw.setConfig('EmbedPlayer.WebKitPlaysInline', true);
        /* global kWidget:true */

        kWidget.embed({
          'targetId': 'kaltura_player',
          'flashvars': {
            // flashvars allows you to set runtime uiVar configuration overrides.
            'autoPlay': false
          },
          'wid': '_1446471',
          'uiconf_id': '30101351',
          'entry_id': $(this).attr('id')
        });
      } else {
        $(this).replaceWith('<div class="video" id="video' + index + '"></div>');
      } // Now that we have loaded the kaltura player we can also load threeplay.


      if ($(this).attr('title')) {
        /* global p3_api_key:true */

        /* exported p3_api_key */
        p3_api_key = '';
        /* global p3_window_wait:true */

        /* exported p3_window_wait */

        p3_window_wait = false;
        $('#video' + index).append('<div id="transcript_' + $(this).attr('title') + '"></div>');
        /* global p3_instances:true */

        if (typeof p3_instances == 'undefined') p3_instances = {};

        if (!p3_instances['kaltura_player']) {
          p3_instances['kaltura_player'] = {
            file_id: $(this).attr('title'),
            player_type: 'kaltura',
            api_version: 'simple',
            project_id: '11439',
            platform_integration: false
          };
        } // attach the threeplay player to the Kaltura player.

        /* global p3_is_loading:true */


        p3_instances['kaltura_player']['transcript'] = {
          target: 'transcript_' + $(this).attr('title'),
          width: '712',
          height: '290',
          skin: 'minimalist',
          can_collapse: true,
          progressive_tracking: true,
          can_print: true,
          can_download: true,
          download_format: 'pdf'
        };

        if (typeof p3_is_loading == 'undefined' || !p3_is_loading) {
          p3_is_loading = true;
          $('#video' + index).append('<div id="p3-js-main-root"></div>');
          var e = document.createElement('script');
          e.async = true;
          e.src = '//p3.3playmedia.com/p3.js';
          document.getElementById('p3-js-main-root').appendChild(e);
        }
      }
    });
  });
}

hsphKalturaThreePlay();

/***/ }),

/***/ "./js/uitabs.js":
/*!**********************!*\
  !*** ./js/uitabs.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function hsphCanvasTabs() {
  // Check that we are ready to go.
  jQuery(document).ready(function ($) {
    // Activate Tabs
    $('#tabs, .tabs').tabs();
  });
}

hsphCanvasTabs();

/***/ }),

/***/ "./sass/app.scss":
/*!***********************!*\
  !*** ./sass/app.scss ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["public/css/app","/public/js/vendor"], function() { return __webpack_exec__("./node_modules/jquery/dist/jquery.js"), __webpack_exec__("./node_modules/jquery-ui/ui/widgets/tabs.js"), __webpack_exec__("./js/google.js"), __webpack_exec__("./js/kalturathreeplay.js"), __webpack_exec__("./js/blue-explorance.js"), __webpack_exec__("./js/uitabs.js"), __webpack_exec__("./sass/app.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);