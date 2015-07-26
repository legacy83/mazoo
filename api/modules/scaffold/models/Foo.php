<?php

namespace api\modules\scaffold\models;

use yii\db\ActiveRecord;

class Foo extends ActiveRecord
{
    public static function tableName()
    {
        return 'foo';
    }

    public function rules()
    {
        return [
            [ [ 'one', 'two', 'three' ], 'safe' ],
        ];
    }
}
