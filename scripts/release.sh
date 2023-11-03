#!/bin/bash
# To be able to run this on Windows : npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"

# Exit on first error
set -e

# Publish to npm
cp ./package.json ./dist/package.json
cd ./dist
yarn publish