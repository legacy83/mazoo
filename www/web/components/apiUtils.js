'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        router = require( 'plugins/router' );

    var protocol = window.location.protocol,
        host = window.location.host.replace( 'www', 'api' ),
        isIdentity = function ( identity ) {
            return !_.isNaN( parseInt( identity ) );
        };

    return {

        /**
         * Build the resource url.
         *
         * @param r
         * @param identity
         * @returns {string}
         */
        buildResourceUrl: function ( r, identity ) {
            var apiLocation = [ protocol, '//', host, '/', r ];
            if ( isIdentity( identity ) ) {
                apiLocation.push( '/' );
                apiLocation.push( identity );
            }

            return apiLocation.join( '' );
        }

    };

} );