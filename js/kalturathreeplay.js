function hsphKalturaThreePlay() {
    // Check that we are ready to go.
    jQuery( document ).ready(function($) {
        // Jquery has been loaded so we can now use it.
        
        // Check to see whether the kaltura-threeplay div exists yet; if not, stall.
        if( $(".kaltura-threeplay").length == 0 ) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            setTimeout(function() {
                console.log('kaltura-threeplay div not found; wait 3 seconds');    
                if( window.location.href.indexOf( 'harvard.test.instructure.com' ) > -1 ) {
                    hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/dev/js/manifest.js' );
                    } else {
                    hsphloadScript( 'https://content.sph.harvard.edu/it/canvas-theme/prod/js/manifest.js' );
                    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            }, 3000);}   

        $( '.kaltura-threeplay' ).each(function( index ) {

            // lets see if we have a kaltura attribute
            if ( $( this ).attr( 'id' ) ) {
                $( this ).replaceWith( '<div class="video" id="video' + index + '"><div class="kaltura-player-container"><!--  maintain 16/9 aspect ratio: --><div class="kaltura-player-container-absolute"><div id="kaltura_player" style="width:712px; height: 401px;"></div></div></div></div>' );

                // Kwidget Embed code to load the kaltura player.
                /* global mw:true */
                mw.setConfig('EmbedPlayer.EnableIpadHTMLControls', false);
                mw.setConfig('EmbedPlayer.WebKitPlaysInline', true);
                /* global kWidget:true */
                kWidget.embed({
                    'targetId' : 'kaltura_player',
                    'flashvars':{ // flashvars allows you to set runtime uiVar configuration overrides.
                        'autoPlay': false
                    },
                    'wid': '_1446471',
                    'uiconf_id' : '30101351',
                    'entry_id' : $( this ).attr( 'id' )
                });
            } else {
                $( this ).replaceWith( '<div class="video" id="video' + index + '"></div>' );
            }

            // Now that we have loaded the kaltura player we can also load threeplay.
            if ( $( this ).attr( 'title' ) ) {
                /* global p3_api_key:true */
                /* exported p3_api_key */
                p3_api_key = '';
                /* global p3_window_wait:true */
                /* exported p3_window_wait */
                p3_window_wait = false;
                $( '#video' + index ).append( '<div id="transcript_' + $( this ).attr( 'title' ) + '"></div>');
                /* global p3_instances:true */
                if (typeof p3_instances == 'undefined') p3_instances = {};
                if (!p3_instances['kaltura_player']){
                    p3_instances['kaltura_player'] = {
                        file_id: $( this ).attr( 'title' ),
                        player_type: 'kaltura',
                        api_version: 'simple',
                        project_id: '11439',
                        platform_integration: false
                    }
                }
                // attach the threeplay player to the Kaltura player.
                /* global p3_is_loading:true */
                p3_instances['kaltura_player']['transcript'] = {target:'transcript_' + $( this ).attr( 'title' ), width:'712', height:'290', skin:'minimalist', can_collapse:true, progressive_tracking:true, can_print:true, can_download:true, download_format:'pdf'}
                if (typeof p3_is_loading == 'undefined' || (!p3_is_loading)) {
                    p3_is_loading = true;
                    $( '#video' + index ).append( '<div id="p3-js-main-root"></div>' );
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