'use strict';

define( function ( require ) {

    var app = require( 'durandal/app' ),
        router = require( 'plugins/router' );

    return function () {
        var self = this;

        self.activate = function () {
            router.map( [
                { route: '', moduleId: 'viewModels/site/home' },
                { route: '@todo', moduleId: 'viewModels/scaffold/todo' }
            ] ).buildNavigationModel( 100 );

            return router.activate();
        };

    };

} );