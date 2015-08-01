'use strict';

requirejs.config( {
    paths: {
        'text': 'bower_components/requirejs-text/text',
        'jquery': 'bower_components/jquery/dist/jquery',
        'lodash': 'bower_components/lodash/lodash',
        'knockout': 'bower_components/knockout/dist/knockout',
        'durandal': 'bower_components/durandal/js',
        'plugins': 'bower_components/durandal/js/plugins',
        'transitions': 'bower_components/durandal/js/transitions',
        'bootstrap': 'bower_components/bootstrap/js/bootstrap'
    },
    shim: {
        'bootstrap': {
            deps: [ 'jquery' ],
            exports: 'jQuery'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
} );

define( function ( require ) {

    var app = require( 'durandal/app' ),
        viewLocator = require( 'durandal/viewLocator' );

    app.title = 'Mazoo';

    app.configurePlugins( {
        router: true
    } );

    app.start().then( function () {
        viewLocator.useConvention();
        app.setRoot( 'viewModels/shell' );
    } );

} );