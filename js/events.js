console.log("this is separate JS file");
// option 2 - [we will use this sometime]
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//option 3 - another 
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option 4 - event listener
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option 4 - another
const blueButton = document.getElementById("make-blue");
blueButton.addEventListener("click", function makeBlue() {
  document.body.style.backgroundColor = "blue";
});

//option 4 - final [we will use this sometime]
document.getElementById("make-orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
