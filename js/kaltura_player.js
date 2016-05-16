(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-64317003-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

//Load jQuery library using plain JavaScript
(function(){
	var kscript = document.createElement('script');
	kscript.type = 'text/javascript';
	kscript.src = 'https://cdnapisec.kaltura.com/p/1446471/sp/144647100/embedIframeJs/uiconf_id/30101351/partner_id/1446471';
	document.getElementsByTagName('head')[0].appendChild(kscript);

	// Poll for jQuery to come into existance
	var checkReady = function(callback) {
		if ( window.jQuery && $( ".kaltura-threeplay" ).length && typeof kWidget !== 'undefined' ) {
			callback(jQuery);
		} else {
			window.setTimeout(function() { checkReady(callback); }, 100);
		}
	};

	// Start polling...
	checkReady(function($) {
		$( '.kaltura-threeplay' ).each(function( index ) {

			// lets see if we have a kaltura attribute
			if ( $( this ).attr( "id" ) ) {
				$( this ).replaceWith( '<div class="video" id="video' + index + '"><div class="kaltura-player-container"><!--  maintain 16/9 aspect ratio: --><div class="kaltura-player-container-absolute"><div id="kaltura_player" style="width:712px; height: 401px;"></div></div></div></div>' );

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

			// how about a threeplay one?
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
					platform_integration: false  }
				}
				p3_instances["kaltura_player"]["transcript"] = {target:"transcript_" + $( this ).attr( "title" ),width:"712",height:"290",skin:"minimalist",can_collapse:true,progressive_tracking:true,can_print:true,can_download:true,download_format:"pdf"}
				if (typeof p3_is_loading == "undefined" || (!p3_is_loading)) {
				  p3_is_loading = true;
				  $( '#video' + index ).append( '<div id="p3-js-main-root"></div>' );
				  var e = document.createElement('script');
				  e.async = true;
				  e.src = "//p3.3playmedia.com/p3.js"
				  document.getElementById('p3-js-main-root').appendChild(e);
				}
			}
		});
	});
})();
