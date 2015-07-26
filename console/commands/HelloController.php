<?php

namespace console\commands;

use yii\console\Controller;

/**
 * Provides sample console commands.
 *
 * @package console\commands
 */
class HelloController extends Controller
{
    /**
     * This command echoes the app identity.
     *
     */
    public function actionIndex()
    {
        $appIdentity = \Yii::$app->id;
        echo "$appIdentity is ready!\n";
    }
}