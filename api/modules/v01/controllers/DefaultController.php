<?php

namespace api\modules\v01\controllers;

use api\controllers\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        return '@todo';
    }
}
