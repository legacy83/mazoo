#!/bin/sh

# -- Composer Asset Plugin
# =========================================
composer global require "fxp/composer-asset-plugin:1.0.0"

# -- App Install/Update
# =========================================
cd /vagrant/ && composer install
cd /vagrant/ && composer update