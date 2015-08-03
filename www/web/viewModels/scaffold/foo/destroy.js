'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        router = require( 'plugins/router' ),
        flash = require( 'components/flash/flash' ),
        fooAPI = require( 'components/api/scaffold/foo' );

    return function () {
        var self = this;
        self.model = ko.observable();

        /**
         * Run the custom activation.
         */
        self.activate = function ( identity ) {
            fooAPI.get( identity ).success( function ( result ) {
                self.model( result );
            } );
        };

        /**
         * Destroy the model
         */
        self.doDestroy = function () {
            fooAPI.destroy( self.model ).success( function () {
                flash.success( '@foo destroyed successfully' );
                router.navigate( '/@foo' );
            } );
        };

        /**
         * Cancel the model creation.
         */
        self.doCancel = function () {
            router.navigate( '/@foo' );
        };

    };

} );