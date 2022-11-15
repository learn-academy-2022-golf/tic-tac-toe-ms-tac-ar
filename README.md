# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories
Pseudocode below each user story:

- As a user, I can see a three by three grid game board on the page.

  - Create an <h1>header</h1>
  - Create gameBoard with nine squares 200px, with black boarder each, in a grid pattern.

- As a user, I can click on a square to mark it.

  -create the onclick that will mark the location of the first mark.

- As a user, my partner can click on a square after me and see their mark.

  - Create boolean if else logic to state if X is last mark then next mark is O.

- As a user, I can't click on a square that has already been marked.
 - We need to move the else statement created for the boolean logic above and create a new if statement that checks to see if there is a value first and alert the players that they need to choose an empty square.

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
 - We want to declare a winner once winning conditions are met. utilized the tic tact toe winner function from free code camp. changed squares to newGameBoard and created a new h2 line where the winner status will show.

- As a user, I can't continue playing the game after the game has been won.
 - Add alert to notify players of winning condition and who won which stops game. 

 - create a conditional statement if status is alerted to winner then game ends with alert to restart new game. 

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
