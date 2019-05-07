let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('./');

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery']
});

mix.webpackConfig({

});

// Combine and minify JavaScript
mix.js([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-ui/ui/widgets/tabs.js',
    'js/google.js',
    'js/kalturathreeplay.js',
    'js/uitabs.js'
], 'public/js/app.js');

// Extract vendor modules into vendor.js
mix.extract(['jquery', 'jquery-ui']);

// Running babel for old browser support
mix.babel('public/js/manifest.js', 'public/js/manifest.js');
mix.babel('public/js/vendor.js', 'public/js/vendor.js');
mix.babel('public/js/app.js', 'public/js/app.js');

// Only bother versioning in production
if (mix.inProduction()) {
    mix.version(['public/js/manifest.js', 'public/js/vendor.js', 'public/js/app.js']);
}
