requirejs.config({
    paths: {
        'text': 'bower_components/requirejs-text/text',
        'durandal': 'bower_components/durandal/js',
        'plugins': 'bower_components/durandal/js/plugins',
        'transitions': 'bower_components/durandal/js/transitions',
        'knockout': 'bower_components/knockout/dist/knockout',
        'bootstrap': 'bower_components/bootstrap/js/bootstrap',
        'jquery': 'bower_components/jquery/dist/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {

    system.debug(true);

    app.title = 'Mazoo';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });

});