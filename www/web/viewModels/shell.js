'use strict';

define( function ( require ) {

    var app = require( 'durandal/app' ),
        router = require( 'plugins/router' ),
        flashMessages = require( 'components/flashMessages' );

    require( 'components/flashMessages/alert' );

    return function () {
        var self = this;
        self.flashMessages = flashMessages;

        /**
         * Run the custom activation.
         */
        self.activate = function () {
            router.map( [

                { route: '', moduleId: 'viewModels/site/home' },

                /* scaffold routes */
                { route: '@todo', moduleId: 'viewModels/scaffold/todo' },
                { route: '@foo', moduleId: 'viewModels/scaffold/foo/index' },
                { route: '@foo/create', moduleId: 'viewModels/scaffold/foo/create' },
                { route: '@foo/show/:id', moduleId: 'viewModels/scaffold/foo/show' },
                { route: '@foo/edit/:id', moduleId: 'viewModels/scaffold/foo/edit' },
                { route: '@foo/destroy/:id', moduleId: 'viewModels/scaffold/foo/destroy' },

            ] ).buildNavigationModel( 100 );

            return router.activate();
        };

    };

} );