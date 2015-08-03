'use strict';

define( function ( require ) {

    var ko = require( 'knockout' ),
        flash = require( 'components/flash/flash' );

    ko.components.register( 'flash-alert', {
        viewModel: function () {
            var self = this;
            self.flash = flash;
        },
        template: [
            '<div class="alert alert-success alert-dismissible" data-bind="visible: flash.has(\'success\')">',
            '<button type="button" class="close" data-bind="click: flash.clear.bind($data, \'success\')"><span>&times;</span></button>',
            '<ul data-bind="foreach: flash.success()">',
            '<li data-bind="text: $data.content"></li>',
            '</ul>',
            '</div>'
        ].join( '' )
    } );

    ko.applyBindings();

} );