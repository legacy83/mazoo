<?php

namespace api\modules\v02\controllers;

use api\controllers\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        return '@todo';
    }
}
