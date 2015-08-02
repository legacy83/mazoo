'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        fooAPI = require( 'components/api/scaffold/foo' );

    return function () {
        var self = this;
        self.model = ko.observable();

        window.model = self.model;

        /**
         * Run the custom activation
         *
         */
        self.activate = function ( identity ) {
            fooAPI.get( identity ).success( function ( result ) {
                self.model( result );
            } );
        };

    };

} );