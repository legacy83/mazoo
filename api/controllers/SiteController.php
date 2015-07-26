<?php

namespace api\controllers;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $appIdentity = \Yii::$app->id;
        return "$appIdentity is ready!";
    }
}
