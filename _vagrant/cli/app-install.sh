#!/bin/sh

# -- Composer Asset Plugin
# =========================================
composer global require "fxp/composer-asset-plugin:1.0.0"

# -- API Install/Update
# =========================================
cd /vagrant/api/ && composer install
cd /vagrant/api/ && composer update

# -- Console Install/Update
# =========================================
cd /vagrant/console/ && composer install
cd /vagrant/console/ && composer update

# -- WWW Install/Update
# =========================================
cd /vagrant/www && bower install