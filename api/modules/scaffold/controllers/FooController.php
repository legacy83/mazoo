<?php

namespace scaffold\controllers;

use api\controllers\ActiveController;

class FooController extends ActiveController
{
    public $modelClass = 'scaffold\models\Foo';
}
