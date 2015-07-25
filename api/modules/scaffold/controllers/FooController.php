<?php

namespace scaffold\controllers;

use scaffold\rest\ActiveController;

class FooController extends ActiveController
{
    public $modelClass = 'scaffold\models\Foo';
}
