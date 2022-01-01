#!/bin/sh
find . -name 'node_modules' -type d -exec rm -rf '{}' +
find . -name '.turbo' -type d -exec rm -rf '{}' +
find . -name '.next' -type d -exec rm -rf '{}' +
rm -rf 'package-lock.json' +