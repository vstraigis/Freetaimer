#!/bin/bash

# Source logger functions
source "$(dirname "$0")/utils-loggers.sh"

_echoInfo "Installing the server..."

cd server
npm install

if [ $? -ne 0 ]; then
    _echoError "Failed to install the server!"
    exit 1
fi

_echoInfo "Server installed successfully."