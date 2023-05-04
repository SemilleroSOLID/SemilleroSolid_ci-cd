#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Commit rejected."
  exit 3
fi
