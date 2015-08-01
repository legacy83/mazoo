'use strict';

define( function ( require ) {

    var apiUtils = {},
        $ = require( 'jquery' ),
        _ = require( 'lodash' ),
        router = require( 'plugins/router' ),
        isIdentity = function ( identity ) {
            return !_.isNaN( parseInt( identity ) );
        };

    apiUtils.routeTo = function ( r, identity ) {
        var query = { r: r };
        if ( isIdentity( identity ) ) {
            query.id = parseInt( identity );
        }

        var apiHost = window.location.host.replace( 'www', 'api' ),
            apiProtocol = window.location.protocol,
            apiLocation = [ apiProtocol, '//', apiHost, '?' ].join( '' );

        return apiLocation + $.param( query );
    };

    return apiUtils;

} );