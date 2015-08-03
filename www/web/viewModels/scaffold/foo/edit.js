'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        router = require( 'plugins/router' ),
        flash = require( 'components/flash/flash' ),
        fooAPI = require( 'components/api/scaffold/foo' );

    var Model = function ( data ) {
        var self = this;
        self.id = data.id;
        self.one = ko.observable( data.one );
        self.two = ko.observable( data.two );
        self.three = ko.observable( data.three );
    };

    return function () {
        var self = this;
        self.model = ko.observable();

        /**
         * Run the custom activation.
         */
        self.activate = function ( identity ) {
            fooAPI.get( identity ).success( function ( result ) {
                self.model( new Model( result ) );
            } );
        };

        /**
         * Update the model
         */
        self.doEdit = function () {
            fooAPI.put( self.model ).success( function () {
                flash.success( '@foo modified successfully' );
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