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

// add the akltura script to the head of our document.
hsphloadScript( 'https://s3.amazonaws.com/hsph-canvas/manifest.js' );
hsphloadScript( 'https://s3.amazonaws.com/hsph-canvas/vendor.js' );
hsphloadScript( 'https://s3.amazonaws.com/hsph-canvas/app.js' );
