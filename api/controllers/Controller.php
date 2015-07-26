<?php

namespace api\controllers;

class Controller extends \yii\rest\Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        unset( $behaviors[ 'authenticator' ] );
        unset( $behaviors[ 'rateLimiter' ] );

        return $behaviors;
    }
}
