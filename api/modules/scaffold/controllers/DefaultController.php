<?php

namespace api\modules\scaffold\controllers;

use api\components\rest\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        $appIdentity = \Yii::$app->id;
        $moduleIdentity = \Yii::$app->getModule( 'scaffold' )->id;
        return "$appIdentity | $moduleIdentity is ready!";
    }
}
