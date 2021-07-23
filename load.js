/**
 * This file was written by the HSPH WebTeam for use on HSPH related Canvas Courses.
 * DO NOT modify this file in any way without express written permssion from the
 * HSPH webteam. Permission can be obtained by emailing webteam@hsph.harvard.edu
 */

 /**
 * Script loader function.
 * 
 * @param string src Script source URL to be loaded.
 */ 
function hsphloadScript(src) {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = src;
	document.getElementsByTagName('head')[0].appendChild(s);
}

 /**
 * Stylesheet loader function.
 * 
 * @param string src Stylesheet source URL to be loaded.
 */ 
  function hsphloadStylesheet(src) {
	var s = document.createElement('link');
	s.type = 'text/css';
	s.rel = 'stylesheet';
	s.href = src;
	document.getElementsByTagName('head')[0].appendChild(s);
}

if( window.location.href.indexOf( 'harvard.test.instructure.com' ) > -1 ) {
	// Load dev JS
	hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/dev/js/manifest.js' );
	hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/dev/js/vendor.js' );
	hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/dev/js/app.js' );
	// Load dev CSS
	hsphloadStylesheet( 'https://content.sph.harvard.edu/it/canvas-theme/dev/css/app.css' );
} else {
	// Load prod JS
	hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/prod/js/manifest.js' );
	hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/prod/js/vendor.js' );
	hsphloadStylesheet( 'https://content.sph.harvard.edu/it/canvas-theme/prod/js/app.css' );
	// Load prod CSS
	hsphloadStylesheet( 'https://content.sph.harvard.edu/it/canvas-theme/dev/prod/app.css' );
}

// add the akltura script to the head of our document.
hsphloadScript( 'https://cdnapisec.kaltura.com/p/1446471/sp/144647100/embedIframeJs/uiconf_id/30101351/partner_id/1446471' );
