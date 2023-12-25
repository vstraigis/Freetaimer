#!/bin/bash

# Source logger functions
source "$(dirname "$0")/utils-loggers.sh"

_echoInfo "Installing the root..."

npm i

if [ $? -ne 0 ]; then
    _echoError "Failed to install the root!"
    exit 1
fi

_echoSuccess "Root installed successfully."