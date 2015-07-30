'use strict';

define(['plugins/http'], function (http) {

    var $ = require('jquery'),
        ko = require('knockout');

    return function () {
        var self = this;
        self.models = ko.observableArray([]);
        self.activate = function () {
            $.get('http://api.192.168.27.14.xip.io/?r=scaffold/to-do', function (data) {
                $.each(data, function (key, val) {
                    self.models.push(val);
                });
            });
        };
    };

});