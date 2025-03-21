const clothingStyle = {
    black: ["black1.png", "black2.png", "black3.png", "black4.png", "black5.png", "black6.png", "black7.png", "black8.png", "black9.png", "black10.png"],
    green: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.png"],
    grey:   ["grey.png", "grey1.jpeg", "grey2.jpeg", "grey3.jpeg", "grey4.jpeg", "grey5.jpeg", "grey6.jpeg", "grey7.jpeg"],
    white: ["white1.jpeg", "white2.jpeg", "white3.jpeg", "white4.png", "qhite5.jpeg", "white6.jpeg", "white8.jpeg", "white8.jpeg"],
}

function changeClothingStyle(style){
    // Get the type of clothing style
    document.querySelector(".main-image").src = clothingStyle[type][0];

       // Update styles panel
       const stylesPanel = document.querySelector(".js-styles-panel");
       stylesPanel.innerHTML = ""; // Clear previous styles

       clothingStyle[type].forEach(style=>{
            let img = document.createElement("img");
            img.src = style;
            img.onclick = ()=> document.querySelector(".main-image").src = style;
            stylesPanel.appendChild(img);
       })
   
}