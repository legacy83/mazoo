<?php

$config = [

    'id' => 'mazoo-api',
    'basePath' => dirname( __DIR__ ),
    'controllerNamespace' => 'api\\controllers',
    'bootstrap' => [ 'log' ],

    /*
     * components
     */

    'components' => [

        /*
         * components/urlManager
         */

        'urlManager' => [
            'enablePrettyUrl' => TRUE,
            'showScriptName' => FALSE,
            'enableStrictParsing' => FALSE,
            'rules' => [
                [ 'class' => 'yii\rest\UrlRule', 'controller' => 'scaffold/foo', 'pluralize' => FALSE ],
            ],
        ],

        /*
         * components/request
         */

        'request' => [

            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],

        ],

        /*
         * components/cache
         */

        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],

        /*
         * components/log
         */

        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => [ 'error', 'warning' ],
                ],
            ],
        ],

        /*
         * components/db
         */

        'db' => require( __DIR__ . '/db.php' ),

    ],

    /*
     * params
     */

    'params' => require( __DIR__ . '/params.php' ),

    /*
     * modules
     */

    'modules' => [
        'v01' => [
            'class' => 'api\modules\v01\Module',
        ],
        'v02' => [
            'class' => 'api\modules\v02\Module',
        ],
        'scaffold' => [
            'class' => 'api\modules\scaffold\Module',
        ],
    ],

];

return $config;
