'use strict';

define( function ( require ) {

    var $ = require( 'jquery' ),
        _ = require( 'lodash' );

    var apiUtils = {},
        router = require( 'plugins/router' ),
        isIdentity = function ( identity ) {
            return !_.isNaN( parseInt( identity ) );
        };

    apiUtils.protocol = window.location.protocol;
    apiUtils.host = window.location.host.replace( 'www', 'api' );

    apiUtils.routeTo = function ( r, identity ) {
        var query = { r: r };
        if ( isIdentity( identity ) ) {
            query.id = parseInt( identity );
        }

        var apiLocation = [ apiUtils.protocol, '//', apiUtils.host, '?' ];
        apiLocation = apiLocation.join( '' );

        return apiLocation + $.param( query );
    };

    return apiUtils;

} );