'use strict';

define( function ( require ) {

    var _ = require( 'lodash' ),
        ko = require( 'knockout' );

    var messages = ko.observableArray( [] ),
        byMessageKey = function ( key ) {
            return { key: key || 'success' };
        };

    function alertMessage( key, message ) {

        if ( _.isEmpty( message ) ) {
            return _.where( messages(), byMessageKey( key ) );
        }

        var alertMessage = { key: key, content: message };
        messages.push( alertMessage );

        _.delay( function () {
            messages.remove( alertMessage );
        }, 9000 );

    }

    return {

        /**
         * Check if has flash messages by key.
         *
         * @param key
         * @returns {boolean}
         */
        has: function ( key ) {
            return _.size( _.where( messages(), byMessageKey( key ) ) ) > 0;
        },

        /**
         * Clear existing flash messages by key.
         *
         * @param key
         */
        clear: function ( key ) {
            messages.removeAll( _.where( messages(), byMessageKey( key ) ) );
        },

        /**
         * Add or get success flash messages.
         */
        success: _.partial( alertMessage, 'success' )

    };

} );