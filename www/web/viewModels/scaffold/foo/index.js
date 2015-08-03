'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        ko = require( 'knockout' ),
        fooAPI = require( 'components/api/scaffold/foo' );

    return function () {
        var self = this;
        self.models = ko.observableArray( [] );

        /**
         * Run the custom activation.
         */
        self.activate = function () {
            fooAPI.all().success( function ( result ) {
                _.forEach( result, function ( it ) {
                    self.models.push( it );
                } );
            } );
        };

    };

} );