<?php /* @var $this yii\web\View */ ?>
<?php $this->title = 'Mazoo'; ?>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand brand" href="#/home">Mazoo</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#/home">Home</a></li>
                <li><a href="#/@todo">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#/@todo">@todo</a></li>
                <li><a href="#/@foo">@foo</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">

    <div flash-messages></div>

    <div ng-view></div>

    <hr>

    <footer>
        <p>&copy; Mazoo <?php echo date( 'Y' ); ?></p>
    </footer>

</div>
<!-- /container -->
