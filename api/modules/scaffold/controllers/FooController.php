<?php

namespace api\modules\scaffold\controllers;

use api\components\rest\ActiveController;

class FooController extends ActiveController
{
    public $modelClass = 'api\modules\scaffold\models\Foo';
}
