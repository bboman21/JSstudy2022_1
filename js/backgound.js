const images = ["background01.jpg","background02.jpg","background03.jpg"];
todayImage = images[Math.floor(Math.random() * images.length)];

console.log(todayImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

console.log(bgImage.src);

document.body.appendChild(bgImage);