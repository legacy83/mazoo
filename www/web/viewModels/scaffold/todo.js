'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        ko = require( 'knockout' ),
        todoAPI = require( 'components/api/scaffold/todo' );

    return function () {
        var self = this;
        self.models = ko.observableArray( [] );

        /**
         * Run the custom activation.
         */
        self.activate = function () {
            todoAPI.all().then( function ( data ) {
                _.forEach( data, function ( it ) {
                    self.models.push( it );
                } );
            } );
        };

    };

} );