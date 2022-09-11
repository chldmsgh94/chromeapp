const body = document.querySelector("body");
const img = ["bg_0.jpeg", "bg_1.jpeg", "bg_2.jpeg"];
const randumNum = Math.floor(Math.random() * img.length);

body.style.backgroundImage = `url(../image/${img[randumNum]})`;