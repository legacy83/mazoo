'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' );

    var API = {},
        resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/to-do' );

    /**
     * Get all the resource items.
     *
     * @returns {*}
     */
    API.all = function () {
        return http.get( resource() );
    };

    return API;

} );