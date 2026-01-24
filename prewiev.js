const dialogRef = document.getElementById("myDialog");
const dialogImage = document.getElementById("preview-image");
const imagesDescription = document.getElementById("desciription");
const dialogCounter = document.getElementById("preview-counter");

const images = [
  { src: "img/alaska.png" },
  { src: "img/animelook.png" },
  { src: "img/sky.png" },
  { src: "img/vogel.png" },
  { src: "img/hurricane.png" },
  { src: "img/sea.png" },
  { src: "img/wildente.png" },
  { src: "img/nightlook.png" },
  { src: "img/voegell.png" },
  { src: "img/wildkatzen.png" },
  { src: "img/mountain.png" },
  { src: "img/winter.png" },
];

const description = [
  "Berge mit See im Alaska",
  "Ein stadt im Anime Look",
  "Wolkenhimmel",
  "Ein Farbiger Vogel auf ein Ast",
  "Aufnahme von ein Hurricane aus dem Weltall",
  "Ein See mit Bergen im Hintergrund",
  "Wildente im Wasser",
  "Morgenddämmerung",
  "Kleine Vögel auf ein Stein",
  "Wildkatzen baby auf Stein",
  "Schne auf Bergspitze",
  "Gefrorener Baum im Winter",
];

function openDialog(index) {
  dialogImage.src = images[index].src;
  imagesDescription.textContent = description[index];
  dialogCounter.textContent = `${index + 1}/12`;

  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}

function changeImage(direction) {
  let currentIndex = images.findIndex((img) =>
    dialogImage.src.includes(img.src),
  );

  currentIndex += direction;

  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;

  dialogImage.src = images[currentIndex].src;
  imagesDescription.textContent = description[currentIndex];
  dialogCounter.textContent = `${currentIndex + 1}/12`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    changeImage(1, event);
  } else if (event.key === "ArrowLeft") {
    changeImage(-1, event);
  } else if (event.key === "Escape") {
    closeOverlay({ target: document.getElementById("overlay") });
  }
});
