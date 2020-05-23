Admiral Mobile App
Introduction
Admiral Introduction.

React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.

Requirements
1. Mac OS - This guide assumes Mac OS which is needed for iOS development.
2. Homebrew is the recommended way to install Watchman and Flow.
3. Install Node.js v8.11.3 or newer.
4. brew install watchman
5. brew install flow
iOS Setup
Xcode 10.1 or higher is required. It can be installed from the App Store. See [Ios setup guide]
(https://facebook.github.io/react-native/docs/android-setup.html) for instructions on how to set up your Ios environment.
Android Setup
You will need to install the Android SDK (and an Android emulator if you want to work on your app without having to use a physical device). See [Android setup guide](https://facebook.github.io/react-native/docs/android-setup.html) for instructions on how to set up your Android environment.
Quick start
$ git clone
$ yarn install
$ cd ios
$ pod install 
$ npx react-native run-android or npx react-native run-ios

or

launch android studio
Tools > Android > AVD Manager
launch virtual device
$ npx react-native run-android
