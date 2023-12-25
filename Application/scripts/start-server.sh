#!/bin/bash

# Source logger functions
source "$(dirname "$0")/utils-loggers.sh"

_echoInfo "Starting the server..."

cd server
npm start

if [ $? -ne 0 ]; then
    _echoError "Failed to start the server!"
    exit 1
fi

_echoSuccess "Server started successfully."
