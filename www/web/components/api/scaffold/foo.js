'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' );

    var API = {},
        resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/foo' );

    /**
     * Get all the resource items.
     *
     * @returns {*}
     */
    API.all = function () {
        return http.get( resource() );
    };

    /**
     * Get the resource item by identity.
     *
     * @param identity
     * @returns {*}
     */
    API.get = function ( identity ) {
        return http.get( resource( identity ) );
    };

    /**
     * Create a new resource item.
     *
     * @param model
     * @returns {*}
     */
    API.post = function ( model ) {
        return http.post( resource(), model );
    };

    /**
     * Update an existing resource item.
     *
     * @param model
     * @returns {*}
     */
    API.put = function ( model ) {
        return http.put( resource( model.id ), model );
    };

    /**
     * Destroy an existing resource item.
     *
     * @param identity
     * @returns {boolean|*}
     */
    API.destroy = function ( identity ) {
        return http.delete( resource( identity ) );
    };

    return API;

} );