var turn = 0; //current turn
var turnTick = 0; // current place in turn
var playerTick = 0;
var score = 0; //current score
var active = false; //whether a turn is active or not
var handler = false; // whether the click and sound handlers are active
var prefillSequenceArray = []; //array containing 40 sequence numbers 1-4 to correspond to pads
var playerSequence = []; //array containing the users pad selections
var greenSound = document.getElementById("green-audio"); //for audio
var redSound = document.getElementById("red-audio");
var yellowSound = document.getElementById("yellow-audio");
var blueSound = document.getElementById("blue-audio");
var animateDuration = 150;

$(document).ready(function () {
    $("#startBtn").click(function() {
         begin_new_game();
    });

    $(".pad").click(function () {
        id = $(this).attr("id");
            if (id == 0 && active == true) {
                animate_pad(0, 'green-pad');
                playerSequence.push(0);
                check_player_input();
            }
            if (id == 1 && active == true) {
                animate_pad(1, 'red-pad');
                playerSequence.push(1);
                check_player_input();
            }
            if (id == 2 && active == true) {
                animate_pad(2, 'yellow-pad');
                playerSequence.push(2);
                check_player_input();
            }
            if (id == 3 && active == true) {
                animate_pad(3, 'blue-pad');
                playerSequence.push(3);
                check_player_input();
            }

    })
})

function begin_new_game() {
    get_random_number();
    show_sequence();

}

function get_random_number() {
    prefillSequenceArray.push(Math.floor((Math.random()*4 )));
    console.log(prefillSequenceArray);
}

function show_sequence() {
    turnTick = 0;
    playerTick = 0;
    playerSequence = [];
    turn++;
    var tickInterval = setInterval(function () {
        if (turnTick < turn) {
            colour = $('#' + prefillSequenceArray[turnTick]).attr("class");
            console.log(colour);
            colour = colour.split(' ')[0];
            animate_pad(prefillSequenceArray[turnTick], colour);
            turnTick ++;
            if(turnTick != prefillSequenceArray.length) {
                clearInterval(tickInterval);
            }
        } else {
            active = true;
        }
    }, 1000);
}
    //
    //
    //
    //     if (prefillSequenceArray[turnTick] === 1 && turnTick < turn) {
    //         console.log(prefillSequenceArray[turnTick])
    //         animate_green_pad();
    //         turnTick ++;
    //     }
    //     if(prefillSequenceArray[turnTick] === 2 && turnTick < turn) {
    //         console.log(prefillSequenceArray[turnTick])
    //         animate_red_pad();
    //         turnTick ++;
    //     }
    //     if (prefillSequenceArray[turnTick] === 3 && turnTick < turn) {
    //         console.log(prefillSequenceArray[turnTick])
    //         animate_yellow_pad();
    //         turnTick ++;
    //     }
    //     if (prefillSequenceArray[turnTick] === 4 && turnTick < turn) {
    //         console.log(prefillSequenceArray[turnTick])
    //         animate_blue_pad();
    //         turnTick ++;
    //     }
    //     else {
    //         active = true;
    //         clearInterval(tickInterval);
    //     }
    // }, 1000);

function animate_pad(id, colour) {
    $('#'+id).addClass(colour+'-active');
    //play sound somehow...
    setTimeout(function () {
        $('#'+id).removeClass(colour+'-active');
    }, 500);
}

// function animate_green_pad() {
//     $(".green-pad").addClass("green-pad-active");
//     greenSound.play();
//     setTimeout(function () {
//         $(".green-pad").removeClass("green-pad-active");
//     }, 500);
// }
//
// function animate_red_pad() {
//     $(".red-pad").addClass("red-pad-active");
//     redSound.play();
//     setTimeout(function () {
//         $(".red-pad").removeClass("red-pad-active");
//     }, 500);
// }
//
// function animate_yellow_pad() {
//     $(".yellow-pad").addClass("yellow-pad-active");
//     yellowSound.play();
//     setTimeout(function () {
//         $(".yellow-pad").removeClass("yellow-pad-active");
//     }, 500);
// }
//
// function animate_blue_pad() {
//     $(".blue-pad").addClass("blue-pad-active");
//     blueSound.play();
//     setTimeout(function () {
//         $(".blue-pad").removeClass("blue-pad-active");
//     }, 500);
// }


//TODO: use for loop bug here--->
function check_player_input() {
    playerTick ++;
    if (prefillSequenceArray[playerTick-1] == playerSequence[playerTick-1]) {
        if (playerSequence.length === turn) {
            active = false;
            get_random_number();
            setTimeout(show_sequence, 1000);
        }
        return;

    } else {
        //play a wrong sound
        alert("Game Over");
    }
}