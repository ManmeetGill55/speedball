var topPosition = 50;
var leftPoistion = 0;

var ball = document.getElementById('ball')
ball.style.position = 'absolute'

setInterval("ballMove()", 100)

function ballMove() {


ball.style.left = leftPoistion+'px'
ball.style.top= topPosition+'px'

topPosition +=5
leftPoistion +=15

if (leftPoistion >= window.innerWidth - 90) {
    topPosition = 50;
    leftPoistion = 0;
}

}