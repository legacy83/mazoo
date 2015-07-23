'use strict';

angular.module( 'flashMessages', [] )

    .directive( 'flashMessages', [ 'flash', function ( flash ) {
        return {
            restrict: 'A',
            scope: {},
            controller: function ( $scope ) {
                $scope.flash = flash;
            },
            templateUrl: 'app/components/flashMessages/flashMessages.html'
        };
    } ] )

    .service( 'flash', [ '$rootScope', function ( $rootScope ) {

        var flash = this,
            messages = [],
            byMessageKey = function ( key ) {
                return { key: key || 'success' };
            };

        flash.has = function ( key ) {
            return _.size( _.where( messages, byMessageKey( key ) ) ) > 0;
        };

        flash.clear = function ( key ) {
            _.remove( messages, byMessageKey( key ) );
        };

        flash.success = _.partial( alertMessage, 'success' );

        function alertMessage( key, message ) {

            if ( _.isEmpty( message ) ) {
                return _.where( messages, byMessageKey( key ) );
            }

            var alertMessage = { key: key, content: message };
            messages.push( alertMessage );

            _.delay( function () {
                $rootScope.$apply( function () {
                    _.remove( messages, alertMessage );
                } );
            }, 9000 );

        }

    } ] );