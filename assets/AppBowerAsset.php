<?php

namespace app\assets;

use yii\web\AssetBundle;

class AppBowerAsset extends AssetBundle
{
    public $sourcePath = '@bower';
    public $css = [
        'bootstrap/dist/css/bootstrap.css',
    ];
    public $js = [
        'lodash/lodash.js',
        'angular/angular.js',
        'angular-route/angular-route.js',
        'bootstrap/dist/js/bootstrap.js',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}