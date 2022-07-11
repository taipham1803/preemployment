# Pre-Employment React Native Project

Mobile App UI Only.

## Requirements

- Mac OS X
- [YarnV1](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v14 or newer + react-native-cli 2.0.1 or newer
- Cocoapod + xcode for iOS and java 11 + android studio for Android
- IDE: VSCode with [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed. Or any IDE that support ESLint integration.


## Running project locally - Runs the app in the development mode.

In the project directory, you can run:

1. Make sure to create a branch and a pull request **before starting development**.

```sh
git checkout -b https://github.com/taipham1803/preemployment
yarn && yarn pod
```

2. Add Google maps key to use Google maps

- Fastest way: Open the project with VSCode and search for `API_KEY_GOOGLE_MAPS`, then replace it with your google maps api key.

#### Or you can change it manually in the following 2 places:
- For Android: ./android/app/src/main/AndroidManifest.xml
- For iOS: ./ios/preemployment/AppDelegate.mm

3. Open xcode, vscode and run node server

```sh 
yarn c
```
4. Run App from Xcode


## Technologies

- TypeScript v4.4.4
- React Native v0.68.1, React v17.0.2
- State management: Recoil, React Context
- ESLint
