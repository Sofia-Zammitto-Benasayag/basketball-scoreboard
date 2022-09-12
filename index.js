let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let count = 0;

function addHomeOne() {
  count += 1;
  homeScore.textContent = count;
}

function addHomeTwo() {
  count += 2;
  homeScore.textContent = count;
}

function addHomeThree() {
  count += 3;
  homeScore.textContent = count;
}

function addGuestOne() {
  count += 1;
  guestScore.textContent = count;
}

function addGuestTwo() {
  count += 2;
  guestScore.textContent = count;
}

function addGuestThree() {
  count += 3;
  guestScore.textContent = count;
}

function resetScore() {
  count = 0;
  homeScore.textContent = count;
  guestScore.textContent = count;
}
