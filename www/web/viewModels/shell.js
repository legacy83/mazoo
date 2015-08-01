'use strict';

define(function (require) {

    var app = require('durandal/app'),
        router = require('plugins/router');

    var ctor = function () {
        var self = this;
        self.router = router;
    };

    ctor.prototype.activate = function () {
        router.map([
            {route: '', moduleId: 'viewModels/site/home'},
            {route: '@todo', moduleId: 'viewModels/scaffold/todo'}
        ]).buildNavigationModel(100);

        return router.activate();
    };

    return ctor;

});