# flash-cards Project

For the flash-cards project, I've built a mobile application (Android/iOS) that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, I could show how to use React Native to build an iOS and Android application.

This project was started using [Create React Native App](https://github.com/react-community/create-react-native-app) to bootstrap the project.

The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

## Project Setup (This assumes that you have Expo installed)

* Clone the Project - `https://github.com/hyalen-moreira/flash-cards.git`
* Install the dependencies - `npm install`
* Start the application - `npm start`

## What you gonna find
```
+--public/    
 |-- index.html - DO NOT MODIFY
+-- src/
 +-- actions
 +-- components
 +-- reducers
 +-- utils
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Specific Requirements
* Use create-react-native-app to build your project.
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.

## Views
* Deck List View (Default View)
  - displays the title of each Deck
  - displays the number of cards in each deck

* Individual Deck View
  - displays the title of the Deck
  - displays the number of cards in the deck
  - displays an option to start a quiz on this specific deck
  - An option to add a new question to the deck

* Quiz View
  - displays a card question
  - an option to view the answer (flips the card)
  - a "Correct" button
  - an "Incorrect" button
  - the number of cards left in the quiz
  - Displays the percentage correct once the quiz is complete

* New Deck View
  - An option to enter in the title for the new deck
  - An option to submit the new deck title

* New Question View
  - An option to enter in the question
  - An option to enter in the answer
  - An option to submit the new question

## API for AsyncStorage database

  - getDecks: return all of the decks along with their titles, questions, and answers. 
  - getDeck: take in a single id argument and return the deck associated with that id. 
  - saveDeckTitle: take in a single title argument and add it to the decks. 
  - addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 

## Future improvements

* Swipe list item to edit / delete card decks
* Edit / delete questions from card deck
* Keep running score of each deck or history of scores

## create-react-native-app

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).
