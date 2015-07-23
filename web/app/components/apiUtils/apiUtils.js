'use strict';

angular.module( 'apiUtils', [] )

    .service( 'apiUtils', [ '$location', function ( $location ) {

        var apiUtils = this,
            host = $location.host(),
            protocol = $location.protocol(),
            isIdentity = function ( identity ) {
                return !_.isNaN( parseInt( identity ) );
            };

        apiUtils.routeTo = function ( r, identity ) {
            var query = { r: r };
            if ( isIdentity( identity ) ) {
                query.id = parseInt( identity );
            }

            var apiLocation = [ protocol, '://', host, '?' ];
            apiLocation = apiLocation.join( '' );

            return apiLocation + $.param( query );
        };

    } ] );
