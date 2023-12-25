#!/bin/bash

# Source logger functions
source "$(dirname "$0")/utils-loggers.sh"

_echoInfo "Starting the client..."

cd client
npm run dev

if [ $? -ne 0 ]; then
    _echoError "Failed to start the client!"
    exit 1
fi

_echoInfo "Client started successfully."