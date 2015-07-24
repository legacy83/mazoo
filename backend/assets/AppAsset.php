<?php

namespace app\assets;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'app/app.css',
    ];
    public $js = [

        'app/app.js',

        /*
         * app/components
         */

        'app/components/apiUtils/apiUtils.js',
        'app/components/flashMessages/flashMessages.js',

        /*
         * app/components/api
         */

        'app/components/scaffold/todo-api.js',
        'app/components/scaffold/foo-api.js',

        /*
         * app/functionality
         */

        'app/site/home/home.js',
        'app/scaffold/todo/todo.js',
        'app/scaffold/foo/foo.js',
        'app/scaffold/foo/foo-show.js',
        'app/scaffold/foo/foo-create.js',
        'app/scaffold/foo/foo-edit.js',
        'app/scaffold/foo/foo-destroy.js',

    ];
    public $depends = [
        'app\assets\AppBowerAsset',
    ];
}