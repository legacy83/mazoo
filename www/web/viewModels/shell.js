'use strict';

define( function ( require ) {

    var app = require( 'durandal/app' ),
        router = require( 'plugins/router' ),
        flashMessages = require( 'components/flashMessages' );

    return function () {
        var self = this;
        self.flashMessages = flashMessages;

        self.activate = function () {
            router.map( [
                { route: '', moduleId: 'viewModels/site/home' },
                { route: '@todo', moduleId: 'viewModels/scaffold/todo' },
                { route: '@foo', moduleId: 'viewModels/scaffold/foo' }
            ] ).buildNavigationModel( 100 );

            return router.activate();
        };

    };

} );