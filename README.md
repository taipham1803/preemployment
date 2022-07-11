# Pre-Employment React Native Project

Mobile App UI Only.

## Requirements

- Mac OS X
- [YarnV1](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v14 or newer + react-native-cli 2.0.1 or newer
- Cocoapod + xcode for iOS and java 11 + android studio for Android
- IDE: VSCode with [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed. Or any IDE that support ESLint integration.


## Running project locally - Runs the app in the development mode.



1. Make sure to create a branch and a pull request, open your terminal and run:

```sh
git clone https://github.com/taipham1803/preemployment
```
- In the rooit project folder, you run:

```sh
yarn && yarn pod
```

2. Add Google maps API key to use Google maps for Android + iOS

- Fastest way: Open the project with VSCode and search for `API_KEY_GOOGLE_MAPS`, then replace it with your google maps api key.

#### Or you can change it manually in the following 2 places:

- For Android: ./android/app/src/main/AndroidManifest.xml
- For iOS: ./ios/preemployment/AppDelegate.mm

3. Open xcode, vscode and run node server in 1 command

```sh 
yarn c
```

4. Run App from Xcode

## And the result of the application running up will be like this

![demo_ios_light](https://user-images.githubusercontent.com/23112684/178327931-541d5c87-29ec-4c09-8977-1ee0d1a578e9.png)
iOS - iPhone 13 (iOS 15.5) - Light Mode

![demo_android_dark](https://user-images.githubusercontent.com/23112684/178328018-9618cb1a-c414-4f2e-9d7f-ad1f10ac9d9c.png)
Android - Galaxy Note 10 (API 30) - Dark Mode

## Technologies

- TypeScript v4.4.4
- React Native v0.68.1, React v17.0.2
- State management: Recoil, React Context
- ESLint
