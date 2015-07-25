<?php

$config = [

    'id' => 'mazoo-console',
    'basePath' => dirname( __DIR__ ),
    'bootstrap' => [ 'log' ],
    'controllerNamespace' => 'app\\commands',

    /*
     * components
     */

    'components' => [

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

];

return $config;
