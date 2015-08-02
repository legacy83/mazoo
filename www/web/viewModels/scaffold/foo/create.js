'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        router = require( 'plugins/router' ),
        fooAPI = require( 'components/api/scaffold/foo' ),
        flash = require( 'components/flashMessages' );

    return function () {
        var self = this;
        self.model = ko.observable();

        /**
         * Create the model
         */
        self.doCreate = function () {
            fooAPI.post( self.model ).success( function () {
                flash.success( '@foo created successfully' );
                router.navigate( '/@foo' );
            } );
        };

        /**
         * Cancel the model creation
         *
         */
        self.doCancel = function () {
            router.navigate( '/@foo' );
        };

    };

} );