'use strict';

define( function ( require ) {

    var system = require( 'durandal/system' );

    return function () {
        var self = this;

        self.activate = function () {
            console.log( system.version );
        };

    };

} );