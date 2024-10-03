let darkmodeButton = document.querySelector(".dark-mode")

darkmodeButton.addEventListener("click", function() {
    let pageBlock = document.querySelectorAll(".page, .block, .header");


    pageBlock.forEach(function(pageBlock) {
        pageBlock.classList.toggle('dark-mode-active');
    });

    if (pageBlock[0].classList.contains("dark-mode-active")) {
        darkmodeButton.textContent = "Light mode";
    } else {
        darkmodeButton.textContent = "Dark mode";
    }
});
