'use strict';

define( function ( require ) {

    var flash = require( 'components/flashMessages' );
    window.flash = flash;

    return function () {
        var self = this;
        self.flash = flash;

        self.activate = function () {
            flash.success( '@foo has been activated!' );
            flash.success( '@foo has been activated! really' );
            flash.success( '@foo has been activated! rally really' );
        };

    };

} );