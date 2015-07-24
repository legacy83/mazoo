'use strict';

angular.module( 'scaffold.todo.todoAPI', [ 'apiUtils' ] )

    .service( 'todoAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            routeTo = apiUtils.routeTo;

        API.all = function () {
            return $http.get( routeTo( 'scaffold/to-do' ) );
        };

    } ] );
