'use strict';

define( function ( require ) {

    var flash = require( 'components/flashMessages' );

    return function () {
        var self = this;

        self.activate = function () {
            flash.success( '@foo has been activated!' );
        };

    };

} );