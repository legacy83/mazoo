<?php /* @var $this yii\web\View */ ?>
<?php /* @var $name string */ ?>
<?php /* @var $message string */ ?>
<?php /* @var $exception Exception */ ?>
<?php $this->title = $name; ?>

<div class="container">

    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand brand" href="<?= Yii::$app->homeUrl; ?>">Mazoo</a>
            </div>
        </div>
    </nav>

    <div class="alert alert-danger">
        <?= nl2br( \yii\helpers\Html::encode( $message ) ); ?>
    </div>

    <div class="page-header">
        <h1><?= \yii\helpers\Html::encode( $this->title ); ?></h1>
    </div>

    <div class="row">

        <div class="col-md-12">

            <p>The above error occurred while the Web server was processing your request.</p>

            <p>Please contact us if you think this is a server error. Thank you.</p>

        </div>

    </div>

    <hr>

    <footer>
        <p>&copy; Mazoo <?php echo date( 'Y' ); ?></p>
    </footer>

</div>
<!-- /container -->
