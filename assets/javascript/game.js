// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
alert("Press any key to get started!");

var game = {

    //variables
    initial: 0, 
    userscore: 0,
    name: "hangman",
    creator: "Max",
    heartval: 0,
    spadeval: 0,
    clubval: 0,
    diamondval: 0,
    
    //functions
    hellow : function(){
      console.log("Hello World");
    },

    buttons: function(){
      var btnvalue = Math.floor(Math.random()*9 +1);
      return btnvalue;
    },
    
    start: function(){
      var initialnum = Math.floor(Math.random()*100);
      game.userscore = 0;
      console.log("Creating initial random numbers");
      console.log("Player must make a score of " + initialnum);
      game.heartval = game.buttons();
      game.spadeval = game.buttons();
      game.clubval = game.buttons();
      game.diamondval = game.buttons();
      $("#userscoredisplay").text("User Score");
      $("#scoredisplay").text("Player must make a score of " + initialnum);
      // display = document.getElementById('scoredisplay');
      // display.lastChild.innerHTML = "new";
      return initialnum;
    },

    heart: function(){
      game.userscore += game.heartval;
      console.log("Adding one heart");
      game.wincheck();
    },

    spade: function(){
      game.userscore += game.spadeval;
      console.log("Adding one spade");
      game.wincheck();
    },

    club: function(){
      game.userscore += game.clubval;
      console.log("Adding one club");
      game.wincheck();
    },

    diamond: function(){
      game.userscore += game.diamondval;
      console.log("Adding one diamond");
      game.wincheck();
    },

    wincheck: function(){
      console.log(game.userscore);
      $("#userscoredisplay").text("Current player score " + game.userscore);
      if (game.userscore == game.initial)
      {
        // console.log("WINNER! Restarting game");
        alert("WINNER! Restarting game")
        game.initial = game.start();
      }
      else if (game.userscore > game.initial)
      {
        // console.log("OVERLOAD! Restarting game")
        alert("OVERLOAD! Restarting game")
        game.initial = game.start();
      }
    }
}

// Initialize game
game.initial = game.start();

// Event Listener
document.getElementById("heartbtn").addEventListener("click", game.heart);
document.getElementById("spadebtn").addEventListener("click", game.spade);
document.getElementById("clubbtn").addEventListener("click", game.club);
document.getElementById("diamondbtn").addEventListener("click", game.diamond);
