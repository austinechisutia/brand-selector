const clothingStyle = {
    green: ["images/green/1.jpeg", "images/green/2.jpeg", "images/green/3.jpeg", "images/green/4.jpeg", "images/green/5.jpeg", "images/green/6.jpeg", "images/green/7.png"],
    black: ["images/black/black1.png", "images/black/black2.png", "images/black/black3.png", "images/black/black4-logo.jpeg"],
    grey:  ["images/grey/grey1.jpeg", "images/grey/grey2.jpeg", "images/grey/grey3.png", "images/grey/grey4.jpeg"],
    white: ["images/white/white.jpeg", "images/white/white2.jpeg", "images/white/white-3.jpeg", "images/white/white4.png", "images/white/qhite5.jpeg"]
};

function changeClothing(style) {
    if (!clothingStyle[style]) {
        console.error("Style not found:", style);
        return;
    }

    console.log("Switching to:", style);

    const mainImage = document.getElementById("mainImage");
    if (!mainImage) {
        console.error("Main image element not found.");
        return;
    }

    // Set main image to the first image of the selected clothing type
    mainImage.src = clothingStyle[style][0];

    // Save selected clothing type to localStorage
    localStorage.setItem("selectedClothing", style);

    // Update styles panel
    const stylesPanel = document.querySelector(".js-styles-panel");
    if (!stylesPanel) {
        console.error("Styles panel element not found.");
        return;
    }

    stylesPanel.innerHTML = ""; // Clear previous styles

    clothingStyle[style].forEach(imageSrc => {
        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Clothing style";
        img.classList.add("style-thumbnail");
        img.onmouseover = () => {
            mainImage.src = imageSrc;
            console.log("Hovered on:", imageSrc);
        };
        stylesPanel.appendChild(img);
    });
}

// Load saved clothing type from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("selectedClothing") || "green"; // Default to 'green' if none is saved
    changeClothing(savedStyle);
});
