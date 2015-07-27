<?php

namespace api\modules\v01\controllers;

use api\components\rest\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        $appIdentity = \Yii::$app->id;
        $moduleIdentity = \Yii::$app->getModule( 'v01' )->id;
        return "$appIdentity | $moduleIdentity is not ready!";
    }
}
