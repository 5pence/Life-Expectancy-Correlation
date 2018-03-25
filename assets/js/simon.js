var turn = 0; //current turn
var turnTick = 0; // current place in turn
var score = 0; //current score
var active = false; //whether a turn is active or not
var handler = false; // whether the click and sound handlers are active
var prefillSequenceArray = []; //array containing 40 sequence numbers 1-4 to correspond to pads
var playerSequence = []; //array containing the users pad selections

$("#startBtn").click(
    function()
           {
             begin_new_game();
           }
        );

function begin_new_game() {
    prefill_sequence();
    turn++;
    show_sequence();

}

function prefill_sequence() {
    for (i=0; i< 40; i++) {
        prefillSequenceArray.push(Math.floor((Math.random()*4) +1));
    }
    turn = 4;
    return;
}

function show_sequence() {
    var interval = setInterval(function () {
        if (prefillSequenceArray[turnTick] === 1 && turnTick < turn) {
            console.log(prefillSequenceArray[i])
            animate_green_pad();
            turnTick ++;
        }
        else if(prefillSequenceArray[turnTick] === 2 && turnTick < turn) {
            console.log(prefillSequenceArray[i])
            animate_red_pad();
            turnTick ++;
        }
        else if (prefillSequenceArray[turnTick] === 3 && turnTick < turn) {
            console.log(prefillSequenceArray[i])
            animate_yellow_pad();
            turnTick ++;
        }
        else if (prefillSequenceArray[turnTick] === 4 && turnTick < turn) {
            console.log(prefillSequenceArray[i])
            animate_blue_pad();
            turnTick ++;
        }
    }, 600);
}

function animate_green_pad() {
    $(".green-pad").animate({ opacity: 1});
    $(".green-pad").animate({ opacity: 0.6});
}

function animate_red_pad() {
    $(".red-pad").animate({ opacity: 1});
    $(".red-pad").animate({ opacity: 0.6});
}

function animate_yellow_pad() {
    $(".yellow-pad").animate({ opacity: 1});
    $(".yellow-pad").animate({ opacity: 0.6});
}

function animate_blue_pad() {
    $(".blue-pad").animate({ opacity: 1});
    $(".blue-pad").animate({ opacity: 0.6});
}
