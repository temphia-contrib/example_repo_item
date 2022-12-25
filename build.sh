#!/usr/bin/sh

echo "Pretend like we are building something"
sleep 10

cp bprint.json output/index.json
cp server.js output/server.js
cp client.js output/client.js

echo "build complete"