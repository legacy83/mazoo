<?php

namespace api\components\rest;

class ActiveController extends \yii\rest\ActiveController
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        unset( $behaviors[ 'authenticator' ] );
        unset( $behaviors[ 'rateLimiter' ] );

        return $behaviors;
    }
}
