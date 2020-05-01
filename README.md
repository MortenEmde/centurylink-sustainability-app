

# MobtimusPrime MVP for CenturyLink

A proof of concept sustainability-focused Travel app. The puropse of it is to demonstrate the feasibility of a design idea. It tries to incentivise slight changes in behavioural patterns, that will lead to a positive outcome, like the reduction of carbon emissions and an increased mental and physical health of employees.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Original Creators](#Original\ Creators)

## Installation


1. Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the Mac AppStore.
2. Install Node.js, by running this command in the Terminal:
```sh
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```
2. Install the project by running the following commands in the Terminal:
```sh
git clone git@github.com:mobtimusPrime/centurylinkTravel.git
```


## Usage

To start up the app, in the terminal type:

```sh
cd centurylinkTravel
npm run start
```
This starts up the iOS simulator, and instantiates the app.

If you want to run the App on your mobile device, you can scan the QR code that displays in the terminal, using the **Expo** App, which is available at the [App Store (iOS)](https://itunes.com/apps/exponent) or [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).

*The minimum Android version is Lollipop (5) and the minimum iOS version is iOS 10.0.*

To exit the Server, Type CTRL + C  in the Terminal.

## Original Creators

- [Richard Rietdijk](https://github.com/richardrietdijk)
- [Helena Nicholson](https://github.com/hlmnicholson)
- [Lauren Challis](https://github.com/laurendorothy)
- [Morten Christensen](https://github.com/MortenEmde)
- [Zimri Leijen](https://github.com/zimmah)









