var buttonColours=["red","green","yellow","blue"];
var comp=[];
var user=[];
var level=0;
var high=0;
var start=false;

document.addEventListener("keypress" , function(){
    if(!start){
        document.querySelector("h1").innerHTML="Score " + level;
        nextSequence();
        start=true;
    }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    user.push(userChosenColour);
  
    playSound(userChosenColour);
    // animatePress(userChosenColour);
  
    checkAnswer(user.length-1);
});

function checkAnswer(currlength){
    if(user[currlength] === comp[currlength]){
        if(user.length === comp.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("gameover");
        document.querySelector("h1").innerHTML="Game Over, Press Any Key To Restart!!";
        setTimeout(function(){
            // body.removeClass("gameover");
            $("body").removeClass("gameover");
        },200);
        startOver();
    }
}

// function animatePress(currentColor){
//     $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

function nextSequence(){
    user=[];
    level++;
    document.querySelector("h1").innerHTML="Score " + level;
    var randomNum=Math.floor(Math.random()*4);
    var randomColor=buttonColours[randomNum];
    comp.push(randomColor);
    $("." + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}

function playSound(playColor){
    if(playColor === "wrong"){
        var audio=new Audio(playColor + ".wav");
        audio.play();
    }
    else{
        var audio = new Audio( playColor + ".mp3");
        audio.play();
    }
}

function startOver(){
    level=0;
    start=false;
    comp=[];
}