/**
 * This file was written by the HSPH WebTeam for use on HSPH related Canvas Courses.
 * DO NOT modify this file in any way without express written permssion from the
 * HSPH webteam. Permission can be obtained by emailing webteam@hsph.harvard.edu
 */

const hsphGoogleAnalytics = () => {
    // Load custom tracking code lazily, so it's non-blocking.
    import( './google.js' ).then( ( analytics ) => analytics.init() );
};

// Start the app through its main entry point.
hsphGoogleAnalytics();

const hsphKalturaThreePlay = () => {
    // Load custom tracking code lazily, so it's non-blocking.
    import( './canvas.js' ).then( ( canvas ) => canvas.init() );
};

// Load Js for the external kaltura. 
var hsphLoadJS = require('loadjs');

hsphLoadJS(['https://cdnapisec.kaltura.com/p/1446471/sp/144647100/embedIframeJs/uiconf_id/30101351/partner_id/1446471'], 'hsphKaltura');

loadjs.ready('hsphKaltura', function() {
    // Start the app through its main entry point.
    hsphKalturaThreePlay();  
});
