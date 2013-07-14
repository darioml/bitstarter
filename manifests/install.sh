#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

sudo apt-get update
sudo apt-get install -y language-pack-en
sudo apt-get install -y puppet puppet-common

curl https://raw.github.com/creationix/nvm/master/install.sh | sh
source $HOME/.nvm/nvm.sh
nvm install v0.10.12
nvm use v0.10.12

sudo puppet apply $DIR/base.pp