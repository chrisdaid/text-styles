const normalText = document.querySelector(".normal");

// bold button
const boldButton = document.querySelector(".boldButton");
boldButton.addEventListener('click', () => normalText.classList.toggle('bold'));

// italic button
const italicButton = document.querySelector(".italicButton");
italicButton.addEventListener('click', () => normalText.classList.toggle('italic'));

// underline button
const underLineButton = document.querySelector(".underLineButton")
underLineButton.addEventListener('click', () => normalText.classList.toggle('underline'));

// reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => normalText.classList.remove('bold', 'italic', 'underline'))

// theme change
const button = document.querySelectorAll('.button');
// colors on hover
const blue = "#5c98ff";
const purple = "#e02eff";
const orange = "#ffa733";
// switch background to blue
const blueButton = document.querySelector('.blue-btn');
blueButton.addEventListener('click', () => {
    button[0].style.backgroundColor = "var(--blue)";
    button[1].style.backgroundColor = "var(--blue)";
    button[2].style.backgroundColor = "var(--blue)";
    button[0].addEventListener('mouseover', () => button[0].style.backgroundColor = blue)
    button[0].addEventListener('mouseleave', () => button[0].style.backgroundColor = "var(--blue)")
    button[1].addEventListener('mouseover', () => button[1].style.backgroundColor = blue)
    button[1].addEventListener('mouseleave', () => button[1].style.backgroundColor = "var(--blue)")
    button[2].addEventListener('mouseover', () => button[2].style.backgroundColor = blue)
    button[2].addEventListener('mouseleave', () => button[2].style.backgroundColor = "var(--blue)")
});
// switch background to purple
const purpleButton = document.querySelector('.purple-btn');
purpleButton.addEventListener('click', () => {
    button[0].style.backgroundColor = "var(--purple)";
    button[1].style.backgroundColor = "var(--purple)";
    button[2].style.backgroundColor = "var(--purple)";
    button[0].addEventListener('mouseover', () => button[0].style.backgroundColor = purple)
    button[0].addEventListener('mouseleave', () => button[0].style.backgroundColor = "var(--purple)")
    button[1].addEventListener('mouseover', () => button[1].style.backgroundColor = purple)
    button[1].addEventListener('mouseleave', () => button[1].style.backgroundColor = "var(--purple)")
    button[2].addEventListener('mouseover', () => button[2].style.backgroundColor = purple)
    button[2].addEventListener('mouseleave', () => button[2].style.backgroundColor = "var(--purple)")
});

// switch background to orange
const orangeButton = document.querySelector('.orange-btn');
orangeButton.addEventListener('click', () => {
    button[0].style.backgroundColor = "var(--orange)";
    button[1].style.backgroundColor = "var(--orange)";
    button[2].style.backgroundColor = "var(--orange)";
    button[0].addEventListener('mouseover', () => button[0].style.backgroundColor = orange);
    button[0].addEventListener('mouseleave', () => button[0].style.backgroundColor = "var(--orange)");
    button[1].addEventListener('mouseover', () => button[1].style.backgroundColor = orange);
    button[1].addEventListener('mouseleave', () => button[1].style.backgroundColor = "var(--orange)")
    button[2].addEventListener('mouseover', () => button[2].style.backgroundColor = orange);
    button[2].addEventListener('mouseleave', () => button[2].style.backgroundColor = "var(--orange)");
});
