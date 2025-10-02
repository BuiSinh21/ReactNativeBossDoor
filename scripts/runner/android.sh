#!/bin/sh
run_debug() {
  echo "🚀🚀🚀 Runing on mode=debug 🚀🚀🚀"
  # yarn setup
  npx react-native run-android --mode=debug
}

run_release() {
  echo "🚀🚀🚀 Runing on mode=release 🚀🚀🚀"
  # yarn setup
  npx react-native run-android --mode=release
}

if [[ $1 == "release" ]]; then
  run_release
else
  run_debug
fi