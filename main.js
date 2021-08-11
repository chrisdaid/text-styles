let normalText = document.querySelector(".normal");

// bold button
let boldButton = document.querySelector(".boldButton");
boldButton.addEventListener('click', () => normalText.classList.toggle('bold'));

// italic button
let italicButton = document.querySelector(".italicButton");
italicButton.addEventListener('click', () => normalText.classList.toggle('italic'));

// underline button
let underLineButton = document.querySelector(".underLineButton")
underLineButton.addEventListener('click', () => normalText.classList.toggle('underline'));

// reset button
let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => normalText.classList.remove('bold', 'italic', 'under-line'))

