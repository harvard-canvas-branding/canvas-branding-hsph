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
function loadScript(src) {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = src;
	document.getElementsByTagName('head')[0].appendChild(s);
}

// add the akltura script to the head of our document.
loadScript( 'https://cdnapisec.kaltura.com/p/1446471/sp/144647100/embedIframeJs/uiconf_id/30101351/partner_id/1446471' );
if( typeof jQuery.ui === 'undefined' ) {
	loadScript( 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js' );
}

// Poll for jQuery to come into existance.
var checkReady = function(callback) {
	if ( window.jQuery && $( ".kaltura-threeplay" ).length && typeof kWidget !== 'undefined' ) {
		callback(jQuery);
	} else {
		window.setTimeout(function() { checkReady(callback); }, 100);
	}
};

// jQuery Has been loaded, we can now run the scripts.
checkReady( function($) {
	// Jquery has been loaded so we can now use it.
	$( '.kaltura-threeplay' ).each(function( index ) {

		// lets see if we have a kaltura attribute
		if ( $( this ).attr( "id" ) ) {
			$( this ).replaceWith( '<div class="video" id="video' + index + '"><div class="kaltura-player-container"><!--  maintain 16/9 aspect ratio: --><div class="kaltura-player-container-absolute"><div id="kaltura_player" style="width:712px; height: 401px;"></div></div></div></div>' );

			// Kwidget Embed code to load the kaltura player.
			mw.setConfig('EmbedPlayer.EnableIpadHTMLControls', false);
			mw.setConfig('EmbedPlayer.WebKitPlaysInline', true);
			kWidget.embed({
				'targetId' : 'kaltura_player',
				'flashvars':{ // flashvars allows you to set runtime uiVar configuration overrides.
					'autoPlay': false
				},
				'wid': '_1446471',
				'uiconf_id' : '30101351',
				'entry_id' : $( this ).attr( "id" )
			});
		} else {
			$( this ).replaceWith( '<div class="video" id="video' + index + '"></div>' );
		}

		// Now that we have loaded the kaltura player we can also load threeplay. 
		if ( $( this ).attr( "title" ) ) {
			p3_api_key = "";
			p3_window_wait = false;
			$( '#video' + index ).append( '<div id="transcript_' + $( this ).attr( "title" ) + '"></div>');
			if (typeof p3_instances == "undefined") p3_instances = {};
			if (!p3_instances["kaltura_player"]){
				p3_instances["kaltura_player"] = {
					file_id: $( this ).attr( "title" ),
					player_type: "kaltura",
					api_version: "simple",
					project_id: "11439",
					platform_integration: false 
				}
			}
			// attach the threeplay player to the Kaltura player. 
			p3_instances["kaltura_player"]["transcript"] = {target:"transcript_" + $( this ).attr( "title" ),width:"712",height:"290",skin:"minimalist",can_collapse:true,progressive_tracking:true,can_print:true,can_download:true,download_format:"pdf"}
			if (typeof p3_is_loading == "undefined" || (!p3_is_loading)) {
				p3_is_loading = true;
				$( '#video' + index ).append( '<div id="p3-js-main-root"></div>' );
				var e = document.createElement('script');
				e.async = true;
				e.src = "//p3.3playmedia.com/p3.js";
				document.getElementById('p3-js-main-root').appendChild(e);
			}
		}
	});
});

// now lets look at jQuery UI it needs to be loaded and load complete.
function checkJqueryUI() {
	if (typeof jQuery.ui != 'undefined') {
		do_jqueryui();
	} else {
		window.setTimeout( checkJqueryUI, 50 );
	}
}

// jQuery UI has loaded lets run our scripts.
function do_jqueryui() {
	// Check that we are ready to go.
	jQuery( document ).ready(function($) {
		// Activate Tabs
		$('#tabs, .tabs').tabs();
	});
}

// run the jquery UI checks.
checkJqueryUI();