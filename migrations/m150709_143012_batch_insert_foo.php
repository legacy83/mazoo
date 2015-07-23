<?php

use yii\db\Schema;
use yii\db\Migration;

class m150709_143012_batch_insert_foo extends Migration
{
    public function up()
    {
        $this->batchInsert( 'foo',
            [ 'one', 'two', 'three' ],
            [
                [ '@eleven', '@twelve', '@thirteen' ],
                [ '@twentyone', '@twentytwo', '@twentythree' ],
                [ '@thirtyone', '@thirtytwo', '@thirtythree' ],
            ]
        );
    }

    public function down()
    {
        $this->delete( 'foo' );
    }
}
