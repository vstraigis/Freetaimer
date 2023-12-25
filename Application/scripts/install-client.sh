#!/bin/bash

# Source logger functions
source "$(dirname "$0")/utils-loggers.sh"

_echoInfo "Installing the client..."

cd client
npm install

if [ $? -ne 0 ]; then
    _echoError "Failed to install the client!"
    exit 1
fi

_echoSuccess "Client installed successfully."