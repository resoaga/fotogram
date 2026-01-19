const images = [
  { src: "img/alaska.png", alt: "Alaska Landscape" },
  { src: "img/animelook.png", alt: "City with Anime Style" },
  { src: "img/sky.png", alt: "Sky Photo" },
  { src: "img/vogel.png", alt: "Small Bird" },
  { src: "img/hurricane.png", alt: "Hurricane Photo" },
  { src: "img/sea.png", alt: "Sea Photo" },
  { src: "img/wildente.png", alt: "Wild Duck" },
  { src: "img/nightlook.png", alt: "Night Look Photo" },
  { src: "img/vögell.png", alt: "Small Bird on Rock" },
  { src: "img/wildkatzen.png", alt: "Wild Cat Photo" },
  { src: "img/mountain.png", alt: "Mountain Photo" },
  { src: "img/winter.png", alt: "Winter Photo" },
];

const galleryContainer = document.getElementById("gallery");

images.forEach(({ src, alt }) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";

  const imgElement = document.createElement("img");
  imgElement.src = src;
  imgElement.alt = alt;

  galleryItem.appendChild(imgElement);
  galleryContainer.appendChild(galleryItem);
});
