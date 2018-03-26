var turn = 0; //current turn
var turnTick = 0; // current place in turn
var playerTick = 0;
var active = false; //whether a turn is active or not
var prefillSequenceArray = []; //array containing 40 sequence numbers 1-4 to correspond to pads
var playerSequence = []; //array containing the users pad selections
var greenSound = document.getElementById("green-audio"); //for audio
var redSound = document.getElementById("red-audio");
var yellowSound = document.getElementById("yellow-audio");
var blueSound = document.getElementById("blue-audio");
var gameOverSound = document.getElementById("game-over");

$(document).ready(function () {
    $("#startBtn").click(function() {
         begin_new_game();
    });

    $(".pad").click(function () {
        id = $(this).attr("id");
            if (id == 0 && active == true) {
                animate_green_pad();
                playerSequence.push(1);
                check_player_input();
            }
            if (id == 1 && active == true) {
                animate_red_pad();
                playerSequence.push(2);
                check_player_input();
            }
            if (id == 2 && active == true) {
                animate_yellow_pad();
                playerSequence.push(3);
                check_player_input();
            }
            if (id == 3 && active == true) {
                animate_blue_pad();
                playerSequence.push(4);
                check_player_input();
            }

    })
})

function begin_new_game() {
    $("#current-score").text(0);
    prefillSequenceArray = [];
    turn = 0;
    active = false;
    get_random_number();
    show_sequence();

}

function get_random_number() {
    prefillSequenceArray.push(Math.floor((Math.random()*4) +1));
    console.log(prefillSequenceArray);
}

function show_sequence() {
    turnTick = 0;
    playerTick = 0;
    playerSequence = [];
    turn++;
    var tickInterval = setInterval(function () {
        if (prefillSequenceArray.length === turnTick) {
            active = true;
            clearInterval(tickInterval);
        }
        if (prefillSequenceArray[turnTick] === 1) {
            var controller = animate_green_pad();
        }
        if (prefillSequenceArray[turnTick] === 2) {
            var controller = animate_red_pad();
        }
        if (prefillSequenceArray[turnTick] === 3) {
            var controller = animate_yellow_pad();
        }
        if (prefillSequenceArray[turnTick] === 4) {
            var controller = animate_blue_pad();
        }
        turnTick++;

    }, 800);
}

function animate_green_pad() {
    $(".green-pad").animate({opacity: 1}, 200);
    greenSound.play();
    setTimeout(function () {
        $(".green-pad").animate({opacity: 0.6}, 200)}, 400);
    return true;
}

function animate_red_pad() {
    $(".red-pad").animate({opacity: 1}, 200);
    redSound.play();
    setTimeout(function () {
        $(".red-pad").animate({opacity: 0.6}, 200)}, 400);
    return true;
}

function animate_yellow_pad() {
    $(".yellow-pad").animate({opacity: 1}, 200);
    yellowSound.play();
    setTimeout(function () {
        $(".yellow-pad").animate({opacity: 0.6}, 200)}, 400);
    return true;
}

function animate_blue_pad() {
    $(".blue-pad").animate({opacity: 1}, 200);
    blueSound.play();
    setTimeout(function () {
        $(".blue-pad").animate({opacity: 0.6}, 200)}, 400);
    return true;
}
function check_player_input() {
    playerTick ++;
    if (prefillSequenceArray[playerTick-1] == playerSequence[playerTick-1]) {
        if (playerSequence.length == turn) {
            active = false;
            $("#current-score").text(turn);
            get_random_number();
            setTimeout(show_sequence, 1000);
        }
        return;

    } else {
        active = false;
        gameOverSound.play();


    }
}