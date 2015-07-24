#!/bin/sh

# -- Composer Asset Plugin
# =========================================
composer global require "fxp/composer-asset-plugin:1.0.0"

# -- Backend Install/Update
# =========================================
cd /vagrant/backend/ && composer install
cd /vagrant/backend/ && composer update

# -- WWW Install/Update
# =========================================
cd /vagrant/www && bower install