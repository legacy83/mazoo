'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        ko = require( 'knockout' ),
        todoAPI = require( 'components/api/scaffold/todo' );

    var viewModel = function () {
        var self = this;
        self.models = ko.observableArray( [] );
    };

    viewModel.prototype.activate = function () {

        var self = this;

        todoAPI.all().then( function ( data ) {
            _.forEach( data, function ( it ) {
                self.models.push( it );
            } );
        } );

    };

    return viewModel;

} );