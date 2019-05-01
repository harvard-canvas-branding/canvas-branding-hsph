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

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
    'popper.js': ['Popper', 'popper'],
    'xlsx': ['XLSX','xlsx'],
    'file-saver': ['saveAs', 'SaveAs']
});

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    }
});

// Copy over fonts and bootstrap assets for SASS compilation
mix.copy('node_modules/font-awesome/fonts', 'public/fonts/vendor/font-awesome');

// Process SASS into CSS
mix.sass('node_modules/font-awesome/scss/font-awesome.scss', '../resources/assets/css/build')
   .sass('resources/assets/sass/app.scss', '../resources/assets/css/build')
   .sass('resources/assets/sass/bootstrap.scss', '../resources/assets/css/build')
   .sass('resources/assets/sass/placard.scss', '../resources/assets/css/build');

// Combine and minify CSS
mix.styles([
    'resources/assets/css/build/font-awesome.css',
    'resources/assets/css/build/bootstrap.css',
    'node_modules/metismenu/dist/metisMenu.css',
    'resources/assets/css/build/app.css'
], 'public/css/app.css');

// Combine and minify JavaScript
mix.js([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'node_modules/cleave.js/dist/cleave.js',
    'node_modules/cleave.js/dist/addons/cleave-phone.us.js',
    'node_modules/metismenu/dist/metisMenu.js',
    'node_modules/html5shiv/dist/html5shiv.js',
    'node_modules/twbs-pagination/jquery.twbsPagination.js',
    'node_modules/file-saver/FileSaver.js',
    'node_modules/xlsx/dist/xlsx.js',
    'node_modules/jquery.easing/jquery.easing.js',
    'resources/assets/js/bootstrap-theme.js',
    'resources/assets/js/app.js',
    'resources/assets/js/inventory/lists.js',
    'resources/assets/js/inventory/import.js',
    'resources/assets/js/inventory/administrative.js',
    'resources/assets/js/inventory/ionizing.js',
    'resources/assets/js/inventory/non-ionizing.js',
    'resources/assets/js/inventory/compressed-gases.js',
    'resources/assets/js/inventory/material-transport.js',
    'resources/assets/js/inventory/biological.js',
    'resources/assets/js/inventory/equipment-waste.js',
    'resources/assets/js/inventory/chemicals.js',
    'resources/assets/js/inventory/placarding.js',
    'resources/assets/js/inventory/shared.js',
    'resources/assets/js/inventory/users.js',
    'resources/assets/js/inventory/index.js',
    'resources/assets/js/admin/index.js',
    'resources/assets/js/users/create.js',
    'resources/assets/js/users/index.js'
], 'public/js/app.js');

// Extract vendor modules into vendor.js
mix.extract(['jquery', 'popper.js', 'bootstrap', 'cleave.js', 'html5shiv', 'metismenu', 'xlsx','jquery.easing']);

// Running babel for old browser support
mix.babel('public/js/manifest.js', 'public/js/manifest.js');
mix.babel('public/js/vendor.js', 'public/js/vendor.js');
mix.babel('public/js/app.js', 'public/js/app.js');

// Only bother versioning in production
if (mix.inProduction()) {
    mix.version(['public/css/app.css', 'public/js/manifest.js', 'public/js/vendor.js', 'public/js/app.js']);
}
