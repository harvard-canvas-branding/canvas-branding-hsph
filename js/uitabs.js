const hsphJqueryUI = require( 'jquery-ui' );

const hsphCanvasTabs = () => {
    // Check that we are ready to go.
    jQuery( document ).ready(function($) {
        // Activate Tabs
        $('#tabs, .tabs').tabs();
    });
};

hsphCanvasTabs();