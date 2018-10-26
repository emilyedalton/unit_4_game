
// global varibles 
//random number that will be what the player is trying to match
var goalRandom = 0;
//A random number generated that will go into the crystals. Not sure if I even need this variable
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalNum = 0;

var crystal1Rand = 0;
var crystal2Rand = 0;
var crystal3Rand = 0;
var crystal4Rand = 0;
var computerPickNumber = 0;






//Emily document.ready loads all the html element first before it call all the jquery libraries.
$(document).ready(function () {


   // initializes each crystal variable and computer selected number to a random number
    //It sets the totalScore to 0. It outputs the computer picked number to the div. 
    // preserves all global variables.
    function initializeGame() {
        //these global variables below are set and preserved for the game.
        crystal1Rand = Math.floor(Math.random() * 12) + 1;
        console.log("hello")
        crystal2Rand = Math.floor(Math.random() * 12) + 1;
        crystal3Rand = Math.floor(Math.random() * 12) + 1;
        crystal4Rand = Math.floor(Math.random() * 12) + 1;
        computerPickNumber = Math.floor((Math.random() * (120 - 19) + 19));
        totalScore = 0;
    
        //user sees  see the computer seleced number
        $("#newComputerPickNumber").html("Your number to match:" +" " + computerPickNumber);
    
        console.log("intial " + computerPickNumber);
    
    
    }

    //Checks the status of wins or losses.
    function checkStatus() {
        console.log("this is your total score " + totalScore);
        console.log("the computer picked this number " + computerPickNumber);
        if (totalScore === computerPickNumber ) {
            GameReset();
            wins++;
            $("#wins").html("Wins: "+wins);
            console.log("you have won this many times " + wins);
        }
        else if (totalScore > computerPickNumber) {
            GameReset();
            losses++;
            $("#losses").html("Losses: "+losses);
            console.log("you have won this many times " + wins);

        }

    }



    //After wins or losses, it calls the initilize function to start over.
    // for some reason, total score isn't bouncing back to 0 with initializeGame() so I added it here. 
    function GameReset() {
        initializeGame();
        totalScore =0;

    }
    //begin game 

    // Start button runs initializeGame function. Docuument onload wasnt working for this. 

    $("#start_button").on("click", function () {
        $("#start_button").text("Reset Game");
        initializeGame();
      
    });

    $(".Ruby").on("click", function () {
        totalScore += crystal1Rand;
        console.log("I am your first random number  " + crystal1Rand);
        console.log("your new score is " + totalScore);
        //displays the total score to the user.
        $("#userTotalScore").html(totalScore);
        // After every button click game has to check the status of wins or losses.
        checkStatus();

    });

    $(".Emerald").on("click", function () {
        console.log("I am your second random number  " + crystal2Rand)
        totalScore += crystal2Rand;
        console.log("your new score is " + totalScore);
        $("#userTotalScore").html(totalScore);
        checkStatus();
    });




    $(".Diamond").on("click", function () {
        console.log("I am your third random number  " + crystal3Rand)
        totalScore += crystal3Rand;
        console.log("your new score is " + totalScore);
        // this displays the total number the user clicks
        $("#userTotalScore").html(totalScore);
        checkStatus();
    });


    $(".Opal").on("click", function () {
        console.log("I am your fourth random number  " + crystal4Rand)
        totalScore += crystal4Rand;
        console.log("your new score is " + totalScore);
        $("#userTotalScore").html(totalScore);
        checkStatus();
    });


    





});