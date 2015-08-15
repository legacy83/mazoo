#!/bin/sh

# -- Composer Asset Plugin
# =========================================
composer --no-interaction global require "fxp/composer-asset-plugin:1.0.0"

# -- API Install/Update
# =========================================
cd /vagrant/api/ && composer --no-interaction install
cd /vagrant/api/ && composer --no-interaction update

# -- Console Install/Update
# =========================================
cd /vagrant/console/ && composer --no-interaction install
cd /vagrant/console/ && composer --no-interaction update

/vagrant/console/yii migrate --interactive=0

# -- WWW Install/Update
# =========================================
cd /vagrant/www && bower install
