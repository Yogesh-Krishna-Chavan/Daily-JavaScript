//static method can be called without instantiating the class
//static method can not be called through a class instance  because they are designed to be relevant to the class itself, not any one instance of it.
//static method can be called on the class itself
//static method can not access instance properties
//static method can access the static properties

/*
class Animal {
  constructor(name) {
    this.name = name;
  }
  static speak() {
    console.log(this.name + " makes a noise.");
  }

  sing() {
    console.log(this.name + " sings a song.");
  }
}

let panda = new Animal("panda");
panda.speak();
*/

class Game {
  static score = 0;

  constructor() {
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
    console.log("Game started");
  }
  end() {
    this.isPlaying = false;
    console.log("Game ended");
    Game.updateScore();
  }

  static updateScore() {
    Game.score++;
    console.log(`Score: ${Game.score}`);
  }
}

const game = new Game();
game.start();
game.end();
game.end();
game.end();
game.end();
game.end();
game.end();
