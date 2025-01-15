# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://wix.github.io/Detox/docs/introduction/environment-setup) instructions

## Step 1: Setup project

```bash
~ git clone https://github.com/likesmoothies/e2e-detox.git
~ cd e2e-detox
~ npm install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:
```bash
# using npm
npm start
# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android
```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Step 4: Running Detox Tests

Detox is a End-to-End framework focused in mobile applications, in this case it's being used to run tests for a React Native application.

In order to run the tests, first you need to compile the application:

```bash
~ npm run detox:android_build
```
After the detox completed the build then can running the test:
```bash
~ npm run detox:android_test
```
https://github.com/user-attachments/assets/17191c72-69f0-49c9-955f-95dd519e4670

## Detox Test Report
![image](https://github.com/user-attachments/assets/d6ad2362-04e0-4f1d-a453-06bc68cc6ed9)

Below is the log included in the failed report:
![Screenshot 2025-01-15 at 20 27 58](https://github.com/user-attachments/assets/99ded2cd-6333-45d8-ac50-c5f095de0afc)


# Learn More

To learn more about React Native and Detox, take a look at the following resources:

- [Detox Documentaion](https://wix.github.io/Detox/docs/guide/test-id) - Learn more about Detox End to End Test
- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
