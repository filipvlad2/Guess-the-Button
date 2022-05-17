let winner;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  winner = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function verifyWinningButton(clicked_id) {
  if (clicked_id == winner) {
    alert("Winner!");
  } else {
    alert("Looser!");
  }
}