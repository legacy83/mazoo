<?php

namespace api\controllers;

use api\components\rest\Controller;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $appIdentity = \Yii::$app->id;
        return "$appIdentity is ready!";
    }
}
