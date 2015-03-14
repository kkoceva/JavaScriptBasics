//0 1 2  'one' 'two'  'three'
//3 4 5  'four'  'five'  'six'
//6 7 8  'seven' 'eight'  'nine'

var nextTurn = 'X';
function chooseTurn(button) {
    var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (var i = 0; i < arr.length; i++) {
        if (button.id === arr[i]) {
            document.getElementById(arr[i]).innerHTML = 'X';
            document.getElementById(arr[i]).disabled = 'disabled';
            document.getElementById(arr[i]).innerHTML = nextTurn;
            document.getElementById(arr[i]).disabled = 'disabled';
            playersTurn();

            if( document.getElementById(arr[i]).innerHTML === 'X'){
                document.getElementById(arr[i]).style.color = "darkGreen"
            }
        }
    }

    findWinner('one', 'two', 'three');
    findWinner('one', 'four', 'seven');
    findWinner('one', 'five', 'nine');
    findWinner('four', 'five', 'six');
    findWinner('seven', 'eight', 'nine');
    findWinner('two', 'five', 'eight');
    findWinner('three', 'six', 'nine');
    findWinner('three', 'five', 'seven');
}

function findWinner(first, second, third) {
    if (document.getElementById(first).disabled && document.getElementById(second).disabled && document.getElementById(third).disabled) {
        if (document.getElementById(first).innerHTML === document.getElementById(second).innerHTML &&
            document.getElementById(second).innerHTML === document.getElementById(third).innerHTML) {
            if (document.getElementById(first).innerHTML === 'X') {
                alert('Player one wins! Restart the game!');
                location.reload(true);
            }
            else {
                alert('Player two wins! Restart the game!');
                location.reload(true);
            }

        }

    }

}

function playersTurn() {
    if (nextTurn === 'X') {
        nextTurn = 'O';
    } else {
        nextTurn = 'X';
    }
}

function startNewGame() {
    location.reload(true);
}


