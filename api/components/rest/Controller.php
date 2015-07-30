<?php

namespace api\components\rest;

use yii\filters\Cors;

class Controller extends \yii\rest\Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        unset( $behaviors[ 'authenticator' ] );
        unset( $behaviors[ 'rateLimiter' ] );

        $behaviors[ 'corsFilter' ] = [
            'class' => Cors::className(),
        ];

        return $behaviors;
    }
}
