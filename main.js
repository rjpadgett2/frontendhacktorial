
var mainState = {
    preload: function() {

    },

    create: function() {


    },

    update: function() {


    },

    // Make the bird jump
    jump: function() {

    },

    // Restart the game
    restartGame: function() {

    },

    addOnePipe: function(x, y) {

  },

  addRowOfPipes: function() {

  },

  hitPipe: function() {

};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
