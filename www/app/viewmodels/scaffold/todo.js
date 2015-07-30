'use strict';

define(function (require) {

    var _ = require('lodash'),
        ko = require('knockout'),
        http = require('plugins/http');

    return function () {
        var self = this;
        self.models = ko.observableArray([]);
        self.activate = function () {
            http.get('http://api.192.168.27.14.xip.io/?r=scaffold/to-do').then(function (data) {
                _.forEach(data, function (it) {
                    self.models.push(it);
                });
            });
        };
    };

});