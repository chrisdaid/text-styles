let normalText = document.querySelector(".normal");

// bold button
var boldTog = function boldToggle() {
    normalText.classList.toggle('bold');
}

let boldButton = document.querySelector(".boldButton");
boldButton.addEventListener('click', boldTog);
// italic button
var italicTog = function italicToggle() {
    normalText.classList.toggle('italic');
}

let italicButton = document.querySelector(".italicButton");
italicButton.addEventListener('click', italicTog);
// underline button
var underlineTog = function underlineToggle() {
    normalText.classList.toggle('under-line');
}

let underLineButton = document.querySelector(".underLineButton")
underLineButton.addEventListener('click', underlineTog);
// reset button
var resetTog = function resetToggle() {
    normalText.classList.remove('bold', 'italic', 'under-line')
}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', resetTog)

