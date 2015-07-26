<?php

namespace api\modules\v01\controllers;

use api\controllers\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        $todo = new \stdClass();
        $todo->title = '@todo';
        $todo->content = 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.';

        return [ $todo, $todo ];
    }
}
