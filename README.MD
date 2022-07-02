Why React Native?

- It is not webview/performance
- React and Javascript
- Developer experience
- Codepush
- Code sharing

Cons (Negative)

- Bridge
- Swift and Java are still needed
- Fast paced

Requirements and Setup

- Expo which enables you to develop and test for Android and IOS
  npm install -g expo-cli
  Also download expo in phone to test
- node
- npm
- watchman (not required but good to have)
- cocopods
- Java
- Android Studio
- Apple Developer Account to upload for IOS
- Google PLaystore Account to upload for android

to start creating project, in git bash type
npx create-expo-app projectname

Then open new git bash...
expo login -u username -p password

Start development command:
expo start

When SDK not found error, add 'local.properties' in android folder
Then insert this in the file:
sdk.dir = C:\\Users\\pinky\\AppData\\Local\\Android\\Sdk
