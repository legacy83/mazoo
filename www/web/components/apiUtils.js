'use strict';

define( function ( require ) {

    var $ = require( 'jquery' ),
        _ = require( 'lodash' );

    var router = require( 'plugins/router' ),
        isIdentity = function ( identity ) {
            return !_.isNaN( parseInt( identity ) );
        };

    var apiUtils = {
        protocol: window.location.protocol,
        host: window.location.host.replace( 'www', 'api' )
    };

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