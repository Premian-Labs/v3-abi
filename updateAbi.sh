#!/bin/bash

# To be able to run this on Windows : npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"

# Exit on first error
set -e

rm -rf ./temp

git clone -b master https://github.com/Premian-Labs/premia-v3-contracts-private.git ./temp
cd temp
yarn install
forge install
forge build --extra-output-files abi
cd ..
ts-node ./copyAbi.ts
