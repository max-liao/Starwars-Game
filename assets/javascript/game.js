//Character initialization

function SetCharacter(obj) {
  $.each( obj, function( key, value ) {
       var temp = {};
       temp.attr(key,value);
       player = temp;
  });
}

function Jarjar(name,hp,ap,cap,src){
  this.name = "Jar Jar Binks";
  this.hp = 100;
  this.ap = 1;
  this.cap = 1;
  this.initialap = 1;
  this.src = "assets/images/Jar.gif";
}

function Watto(name,hp,ap,cap,src){
  this.name = "Watto";
  this.hp = 100;
  this.initialap = 2;
  this.ap = 2;
  this.cap =  2;
  this.src = "assets/images/watto.jpg";
}

function Ewok(name,hp,ap,cap,src){
  this.name = "Ewok";
  this.hp = 100;
  this.initialap = 3;
  this.ap = 3;
  this.cap =  3;
  this.src = "assets/images/ewok.jpg";
}

function empty(name,hp,ap,cap,src){
  this.name = "";
  this.hp = 100;
  this.ap = 0;
  this.cap =  0;
  this.src = "";
  this.initialap = 0;
}
// var Jarjar = {
//   name: "Jar Jar Binks",
//   hp: 100,
//   initialap: 1,
//   ap: 1,
//   cap: 1,
//   src: "assets/images/Jar.gif",
//   chosen: false,
// }

// var Watto = {
//   name: "Watto",
//   hp: 100,
//   initialap: 2,
//   ap: 2,
//   cap: 2,
//   src: "assets/images/watto.jpg",
//   chosen: false,
// }


// var Ewok = {
//   name: "Ewok",
//   hp: 100,
//   initialap: 3,
//   ap: 3,
//   cap: 3,
//   src: "assets/images/ewok.jpg",
//   chosen: false,
// }

// function player(name,hp,ap,cap,src){
//   this.name = name;
//   this.hp = hp;
//   this.ap = ap;
//   this.cap = cap;
//   this.src = src;
// }


var player = {
}


var enemy = {
}

// var empty = {
//   name: "",
//   hp: 100,
//   ap: 0,
//   cap: 0,  
//   src: "",
//   initialap: 0,
//   chosen: false,
// }

//Game Object
var game = {

    //variables
    name: "StarWarsGame",
    creator: "Max",
    playerpicked: false,
    battlemode: false,
    Jarjarchosen: false,
    Wattochosen: false,
    Ewokchosen: false,

    //functions
    start: function(){
      console.log("New Game");
      game.playerpicked = false;
      game.battlemode = false;
      game.Wattochosen = false;
      game.Jarjarchosen = false;
      game.Ewokchosen = false;
      Watto.hp = 100;
      Jarjar.hp = 100;
      Ewok.hp = 100;
      
      game.startdisplay();
      $("#Jarjarbtn").attr('style','display:inline-block;text-align:center;');
      $("#Wattobtn").attr('style','display:inline-block;text-align:center;');
      $("#Ewokbtn").attr('style','display:inline-block;text-align:center;');
      $("#choosebox").attr('style','display:block;text-align:center;');
      $("#playerpic").attr('src', '');
      $("#enemypic").attr('src', '');

    },

    startdisplay: function(){
      player = new empty;
      enemy = new empty;
      $("#userprompt").text("Select your player");
      $("#playerdisplay").text("Waiting for Player Select");
      $("#enemydisplay").text("Waiting for Enemy Select");
      // Jarjar.ap = Jarjar.initialap;
      // Watto.ap = Watto.initialap;
      // Ewok.ap = Ewok.initialap;
      // player.ap = 
      // console.log(Jarjar);
      // console.log(Watto);
      // console.log(Ewok);
      // console.log(player);
      // console.log(enemy);
      // console.log(empty);
    },

    chooseplayer: function(id){
      if (game.playerpicked == false){
        // console.log("Choosing player");
          switch (id) {
            case "jarjar":
              player = new Jarjar;
              $("#Jarjarbtn").attr('style','display:none;');
              game.Jarjarchosen = true;
              break;
            case "watto":
              player = new Watto;
              game.Wattochosen = true;
              $("#Wattobtn").attr('style','display:none;');
              break;
            case "ewok":
              player = new Ewok;
              game.Ewokchosen = true;
              $("#Ewokbtn").attr('style','display:none;');
              break;
          }
          $("#playerpic").attr('src', player.src);
          $("#playerdisplay").text(player.name + " health: " + player.hp);
          game.playerpicked = true;
          $("#userprompt").text(player.name + " has been chosen. Now pick your enemy for battle...");
        } else {
          switch (id) {
            case "jarjar":
              enemy = new Jarjar;
              game.Jarjarchosen = true;
              $("#Jarjarbtn").attr('style','display:none;');
              $("#choosebox").attr('style','display:none;');
              break;
            case "watto":
              enemy = new Watto;
              game.Wattochosen = true;
              $("#Wattobtn").attr('style','display:none;');
              $("#choosebox").attr('style','display:none;');
              break;
            case "ewok":
              enemy = new Ewok;
              game.Ewokchosen = true;
              $("#Ewokbtn").attr('style','display:none;');
              $("#choosebox").attr('style','display:none;');
              break;
          }
          game.battlemode = true;
          $("#enemypic").attr('src', enemy.src);
          $("#userprompt").text(enemy.name + " picked as enemy. Click on " + enemy.name +  " portrait to attack");
          $("#enemydisplay").text(enemy.name + " health: " + enemy.hp);
        } 
      
      //  else{console.log("Battle mode off");}
    },

    battle: function(){
      $("#enemydisplay").text(enemy.name + " health: " + enemy.hp);
      $("#playerdisplay").text(player.name + " health: " + player.hp);
      // console.log("Enemy button clicked");

      //If player loses all HP, Restart game
      if (player.hp <=0) {
        if (player.ap != 0){
          alert(player.name + " died! Restarting game");
          game.start();
          // console.log(Jarjar);
        }
      } else if (enemy.hp <= 0){
      //If enemy dies, check if any enemies left
        $("#enemydisplay").text("ENEMY DIED");
        game.battlemode = false;
        if ((game.Jarjarchosen && game.Wattochosen && game.Ewokchosen) == true){
          //If no enemies exist win game, Restart
          alert("Winner! Restarting game");
          game.start();
        } else {
          //If enemy still exists select next enemy
          $("#userprompt").text("Enemy has perished. Select Next Challenger");
          $("#choosebox").attr('style','display:block;text-align:center;');
          game.battlemode = false;
        }
      } else { 
        // debugger;
        console.log(player);
        //If player and enemy still have health, attack/counterattack
        enemy.hp -= player.ap;
        player.ap += player.initialap;
        player.hp -= enemy.cap; 
      }
    }

}

$(document).ready(function() {
// Initialize game
  game.start(); 


  //add to first click event
  $(".btn-info").on("click", function() {
    var id = $(this).attr("id");
    var value = $(this).attr("value");
    if (game.battlemode == false){
      game.chooseplayer(value);
    }
  });
  
  $("#enemypic").on("click", function() {
    if (game.battlemode == true){
      game.battle();
    }
  });

  $("#playerpic").on("click", function() {
    console.log("Player Attack Power");
    console.log(player.ap);
  })
  
});