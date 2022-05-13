var winner;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  winner = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function verifyWinningButton(clicked_id) {
  var winnnerText = winner.toString();
  var clickedIdText = clicked_id.toString();
  if (clicked_id.localeCompare(winnnerText) == 0) {
    alert("Winner!");
  } else {
    alert("Looser!");
  }
}