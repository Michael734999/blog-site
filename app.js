const hamburgerButn = document.querySelector(".hamburger_button");
const container = document.querySelector(".innerContainer");
let buttonActivated = false;

hamburgerButn.addEventListener('click', function() {
    if (buttonActivated === false) {
        hamburgerButn.classList.add('open');
        container.style.display = "flex";
        buttonActivated = true;
    } else {
        hamburgerButn.classList.remove('open');
        container.style.display = "none";
        buttonActivated = false;
    }
});