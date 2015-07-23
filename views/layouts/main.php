<?php /* @var $this \yii\web\View */ ?>
<?php /* @var $content string */ ?>
<?php \app\assets\AppAsset::register( $this ); ?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language; ?>" ng-app="mazoo">
<head>
    <meta charset="<?= Yii::$app->charset; ?>">
    <title><?= \yii\helpers\Html::encode( $this->title ); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->head(); ?>
</head>
<body>

<?php $this->beginBody(); ?>

<?= $content; ?>

<?php $this->endBody(); ?>

</body>
</html>

<?php $this->endPage(); ?>
