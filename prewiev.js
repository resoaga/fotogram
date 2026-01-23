const images = [
  { src: "img/alaska.png", alt: "Berge mit See im Alaska" },
  { src: "img/animelook.png", alt: "Ein stadt im Anime Look" },
  { src: "img/sky.png", alt: "Wolkenhimmel" }, //
  { src: "img/vogel.png", alt: "Ein Farbiger Vogel auf ein Ast" }, //
  {
    src: "img/hurricane.png",
    alt: "Aufnahme von Hurricane aus dem Weltall",
  },
  { src: "img/sea.png", alt: "Ein See mit Bergen im Hintergrund" },
  { src: "img/wildente.png", alt: "Wildente im Wasser" },
  { src: "img/nightlook.png", alt: "Morgenddämmerung" },
  { src: "img/vögell.png", alt: "Kleine Vögel auf ein Stein" },
  { src: "img/wildkatzen.png", alt: "Wildkatzen baby auf Stein" },
  { src: "img/mountain.png", alt: "Schne auf Bergspitze" },
  { src: "img/winter.png", alt: "Gefrorener Baum im Winter" },
];

let currentImageIndex = 0;

function openImage(index) {
  currentImageIndex = index;

  const overlay = document.getElementById("overlay");
  const fullImage = document.getElementById("full-image");
  const imageName = document.getElementById("image-name");
  const imageCounter = document.getElementById("image-counter");

  fullImage.src = images[currentImageIndex].src;

  fullImage.alt = images[currentImageIndex].alt;

  imageName.textContent = images[currentImageIndex].alt;

  imageCounter.textContent = currentImageIndex + 1 + "/12";

  overlay.classList.add("active");
}

function closeOverlay(event) {
  if (
    event.target.id === "overlay" ||
    event.target.classList.contains("close-btn") ||
    event.target.closest(".close-btn")
  ) {
    document.getElementById("overlay").classList.remove("active");
  }
}

function changeImage(direction, event) {
  event.stopPropagation();

  currentImageIndex += direction;

  if (currentImageIndex >= images.length) currentImageIndex = 0;

  if (currentImageIndex < 0) currentImageIndex = images.length - 1;

  const fullImage = document.getElementById("full-image");
  const imageName = document.getElementById("image-name");
  const imageCounter = document.getElementById("image-counter");

  fullImage.src = images[currentImageIndex].src;
  fullImage.alt = images[currentImageIndex].alt;
  imageName.textContent = images[currentImageIndex].alt;
  imageCounter.textContent = currentImageIndex + 1 + "/12";
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
