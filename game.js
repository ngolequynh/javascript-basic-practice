const hands = ['Rock', 'Paper', 'Scissors'];

class Player {
  constructor(name) {
    this.name = name;
    this.winTimes = 0;
    this.loseTimes = 0;
    this.hand = '';
    this.move = [];
  }
}

const game = {
  players: [],
  addPlayer(player) {
    this.players.push(player);
  },
  // show win times of players in the game and the final result
  showStatus() {
    console.log('-----Game status-----');
    console.log(`${this.players[0].name} wins ${this.players[0].winTimes} time ${(this.players[0].winTimes !== 1) ? '' : 's'}, `
      + `loses ${this.players[0].loseTimes} time ${(this.players[0].loseTimes !== 1) ? '' : 's'}\n`
      + `${this.players[1].name} wins ${this.players[1].winTimes} time ${(this.players[0].winTimes !== 1) ? '' : 's'}, `
      + `loses ${this.players[1].loseTimes} time ${(this.players[1].loseTimes !== 1) ? '' : 's'}\n`);

    if (this.players[0].winTimes > this.players[1].winTimes) {
      console.log(`${this.players[0].name} is winner`);
    } else if (this.players[0].winTimes < this.players[1].winTimes) {
      console.log(`${this.players[1].name} is winner`);
    } else {
      console.log('You are well matched');
    }
    console.log('---------------------');
  },
  // choose hand when play roshambo return choice base on hands array 0,1,2
  roshamboChooseHand(player) {
    let choiceStr = '';

    function arraytoStr(element, index) {
      choiceStr += `${index}. ${element}\n`;
    }

    hands.forEach(arraytoStr);

    const choice = prompt(`${player.name} turn! Choose your hand.\n${choiceStr}\n`); // eslint-disable-line no-alert

    return choice;
  },
  // return 0 if hand1 equal hand2, -1 if hand1 lose hand2, 1 if hand1 win hand2
  roshamboCompare(hand1, hand2) {
    if (hand1 === hand2) {
      return 0;
    }
    // hand1 lose
    if ((hand1 === 'Rock' && hand2 === 'Paper') || (hand1 === 'Paper' && hand2 === 'Scissors') || (hand1 === 'Scissors' && hand2 === 'Rock')) {
      return -1;
    }
    return 1;
  },
  // play roshambo
  roshambo() {
    console.log('Roshambo start!');

    // players start choose hand
    for (let i = 0; i < this.players.length; i += 1) {
      this.players[i].hand = hands[this.roshamboChooseHand(this.players[i])];
      this.players[i].move.push(this.players[i].hand);
    }

    const result = this.roshamboCompare(this.players[0].hand, this.players[1].hand);

    if (result === -1) {
      this.players[1].winTimes += 1;
      console.log(`Congratulation! ${this.players[1].name} win!`);
    } else if (result === 1) {
      this.players[0].winTimes += 1;
      console.log(`Congratulation! ${this.players[0].name} win!`);
    } else {
      console.log('You are equal on this game.');
    }
  },
};

const chooseTheGame = () => {
  const choice = prompt('Choose the game you want to play!\n1. Roshambo'); // eslint-disable-line no-alert
  if (choice === '1') game.roshambo();
};

// function get name of player
const ask = playerStr => prompt(`Name of ${playerStr}`); // eslint-disable-line no-alert

// create new instance of Player and add player to game object
const newPlayer = (playerStr) => {
  const player = new Player(ask(playerStr));
  game.addPlayer(player);
};

newPlayer('player 1');
newPlayer('player 2');

game.showStatus();

let isContinute;
do {
  chooseTheGame();
  game.showStatus();
  isContinute = prompt('Do you want to continute play? y/n'); // eslint-disable-line no-alert
} while (isContinute === 'y');

console.log(game.players); // for debugging
