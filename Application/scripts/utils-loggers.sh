#!/bin/bash
#
# © Copyright IBM Corporation 2022. All Rights Reserved.
#
# SPDX-License-Identifier: EPL-2.0
#
_echoInfo() {
  echo -e "\033[1;36m# ---------------------------------------------------------\033[0m"
  echo -e "\033[1;36m$1\033[0m"
  echo -e "\033[1;36m# ---------------------------------------------------------\033[0m"
}

_echoInfoYellow() {
  echo -e "\033[1;33m# ---------------------------------------------------------\033[0m"
  echo -e "\033[1;33m$1\033[0m"
  echo -e "\033[1;33m# ---------------------------------------------------------\033[0m"
}

_echoError() {
  echo -e "\033[1;31m# ---------------------------------------------------------\033[0m"
  echo -e "\033[1;31m$1\033[0m"
  echo -e "\033[1;31m# ---------------------------------------------------------\033[0m"
}

printLineSeparator() {
  _echoInfo "# ---------------------------------------------------------"
}

printLine() {
  _echoInfo "# ---------------------------------------------------------"
}

printDeprecationView() {
  printLineSeparator
  printLineSeparator
  printLineSeparator
  _echoInfo "# "
  _echoInfo "# !!!!!!!!! DEPRECEATED !!!!!!!! DEPRECEATED !!!!!!!! DEPRECEATED !!!!!!!!"
  _echoInfo "# "
  _echoError "${1}"
  _echoInfo "# "
  _echoInfo "# !!!!!!!!! DEPRECEATED !!!!!!!! DEPRECEATED !!!!!!!! DEPRECEATED !!!!!!!!"
  _echoInfo "# "
  printLineSeparator
  printLineSeparator
  printLineSeparator
}
