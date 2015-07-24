#!/bin/sh

# -- NodeJS Environment Install/Update
# =========================================

apt-get -y install nodejs
apt-get -y install nodejs-legacy
apt-get -y install npm

npm install -g bower