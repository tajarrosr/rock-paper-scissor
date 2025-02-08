let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
function playGame(playerMove) {
  const moves = ["rock", "paper", "scissors"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  let result = "";
  if (playerMove === computerMove) {
    result = "It's a Tie! 😐";
    score.ties++;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You Win! 🎉";
    score.wins++;
  } else {
    result = "You Lose! 😢";
    score.losses++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playerMove}-icon.png" class="icon-move" /> vs <img src="images/${computerMove}-icon.png" class="icon-move" /> Computer`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}
function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScoreElement();
}
