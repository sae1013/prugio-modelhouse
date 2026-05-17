#!/bin/bash
export PATH="/Users/minwoo/.nvm/versions/node/v24.14.1/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm run start
