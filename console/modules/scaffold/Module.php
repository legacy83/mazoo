<?php

namespace scaffold;

class Module extends \yii\base\Module
{
    public $controllerNamespace = 'scaffold\controllers';
    public $defaultRoute = 'to-do/index';

    public function init()
    {
        parent::init();
    }
}
