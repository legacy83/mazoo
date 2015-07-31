'use strict';

define(function (require) {

    var API = {},
        http = require('plugins/http');

    API.all = function () {
        return http.get('http://api.192.168.27.14.xip.io/?r=scaffold/to-do');
    };

    return API;

});