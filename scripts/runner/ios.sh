#!/bin/sh

run_debug() {
  echo "🚀🚀🚀 Runing on variant=debug 🚀🚀🚀"
    # yarn setup
    npx react-native run-ios --mode Debug "Zukick"
}

run_release() {
  echo "🚀🚀🚀 Runing on variant=release 🚀🚀🚀"
  # yarn setup
  npx react-native run-ios --mode Release
}

if [[ $1 == "release" ]]; then
  run_release
else
  run_debug
fi