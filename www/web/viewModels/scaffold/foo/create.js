'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        router = require( 'plugins/router' ),
        flash = require( 'components/flash/flash' ),
        fooAPI = require( 'components/api/scaffold/foo' );

    var Model = function () {
        var self = this;
        self.one = ko.observable();
        self.two = ko.observable();
        self.three = ko.observable();
    };

    return function () {
        var self = this;
        self.model = new Model();

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
         * Cancel the model creation.
         */
        self.doCancel = function () {
            router.navigate( '/@foo' );
        };

    };

} );