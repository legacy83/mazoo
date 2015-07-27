<?php

namespace api\components\rest;

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
