#!/bin/bash
set -e

NODE_VERSION="v20.12.1"
RUBY_VERSION="2.7.6"
CURRENT_NODE_VERSION=$(node -v)
JAVA_VERSION="17.0.12"
NVM_VERSION="v0.39.7"
CURRENT_JAVA_VERSION=$(java -version 2>&1 | fgrep -i version | cut -d'"' -f2 | sed -e 's/^1\./1\%/' -e 's/\..*//' -e 's/%/./')

echo "1. System environment variable setup"

yarn install

# Setup for macos
if [[ "$OSTYPE" == "darwin"* ]]; then

  if ! which brew > /dev/null; then
    echo "Install Homebrew"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  else
    echo "Skip install Homebrew."
  fi

  if [ -d "$HOME/.nvm" ]; then
    echo "Skip install NVM."
  else
    echo "Install NVM"
    curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh" | bash
  fi

  if ! which rbenv > /dev/null; then
    echo "Install rbenv"
    brew install rbenv
    rbenv init
  else
    echo "Skip install rbenv."
  fi

  if ! which jenv > /dev/null; then
    echo "Install jenv"
    brew install jenv
    jenv init
  else
    echo "Skip install jenv."
  fi

  if [[ "$CURRENT_JAVA_VERSION" == "$JAVA_VERSION" ]]; then
    # brew install zulu17
    echo "Skip setup java sdk version."
    # jenv add /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
    # jenv global "$JAVA_VERSION"
  else
    echo "Set java sdk version $JAVA_VERSION"
    # jenv add /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
    jenv global "$JAVA_VERSION"
  fi

  if ! which watchman > /dev/null ; then
    echo "Install watchman"
    brew install watchman
  else
    echo "Skip install watchman."
  fi

  # Setup bundle
  rm -rf verndor
  bundle install
  
fi

# setup for linux
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  if ! which nvm > /dev/null; then
    echo "Install NVM"
    curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh" | bash
  else
    echo "Skip install NVM."
  fi

  if ! which rbenv > /dev/null; then
    echo "Install rbenv"
    sudo apt-get install rbenv
    rbenv init
  else
    echo "Skip install rbenv."
  fi

  if ! which jenv > /dev/null; then
    echo "Install jenv"
    sudo apt-get install jenv
    jenv init
  else
    echo "Skip install jenv."
  fi

  if ! which watchman > /dev/null; then
    echo "Install watchman"
    sudo apt-get install watchman
  else
    echo "Skip install watchman."
  fi
fi

# setup for windows
if [[ "$OSTYPE" == "msys" ]]; then
  echo "Skip setup for windows."
fi

echo "2. Clean"

if [[ "$OSTYPE" == "darwin"* ]]; then
  # if [[ "$CLEAN_CACHE" == "NO" ]]; then
  #   echo "Skip clean cache."
  # else
  #   yarn clean
  # fi
  # cd android && ./gradlew clean && cd ..
  watchman watch-del-all
else
  if [[ "$CLEAN_CACHE" == "NO" ]]; then
    echo "Skip clean cache."
  fi
  # cd android && ./gradlew clean && cd ..
fi

echo "3. Set up new environment"

if [[ "$OSTYPE" == "darwin"* ]]; then
  touch ./ios/tmp.xcconfig
  cat .env > ios/tmp.xcconfig
else
  cat .env > ios/tmp.xcconfig
fi

cat ./.env > ./fastlane/.env

echo "4. Patch package"

npx patch-package

echo "5. Pod install"

if [[ "$OSTYPE" == "darwin"* ]]; then
    if [[ "$POD_INSTALL" == "NO" ]]; then
        echo "Skip pod install."
    else
        # cd ios
        # bundle exec pod install
        # cd ..
      bundle exec pod install --project-directory=ios
    fi
else
  echo "Skip on windows."
fi

echo "Setup Environment Successfuly !!! 🚀🚀🚀"