// facem o listă (array) cu produse
var products = [
  {
    name: "Bluza",
    price: "10 lei",
    image:
      "https://www.maxine.ro/foto/produse/main/mic1/fbl202071_kaki_bluza-lejera-lasata-pe-un-umar-kaki.jpg",
  },
  {
    name: "Pantaloni",
    price: "30 lei",
    image: "https://fenzy.ro/media/uploads/public/product/20824-llj2256-06.jpg",
  },
  {
    name: "Rochie",
    price: "50 lei",
    image:
      "https://www.inpuff.ro/continut/produse/26440/1200/rochie-de-seara-verde-lunga-elissa-cu-imprimeu-tip-pictura-si-floare-3d_84347.webp",
  },
  {
    name: "Geacă",
    price: "100 lei",
    image:
      "https://www.antoniababy.ro/Pictures/GetProductPicture/bb2bc523-42ae-485c-ad8c-c8779a4ca3b0",
  },
  {
    name: "Hanorac",
    price: "60 lei",
    image:
      "https://www.pokerstars.store/images/thumbs/0001504_pokerstars-players-club-black-hoodie_600.jpeg",
  },
  {
    name: "Tricou",
    price: "25 lei",
    image:
      "https://media.stargift.ro/tricou-din-bumbac-pentru-copii-personalizat-cu-o-poza-portret-si-text_21677581505.jpg",
  },
  {
    name: "Fustă",
    price: "40 lei",
    image: "https://valerio.ro/images/thumbs/0007392_fusta-oana-neagra.jpeg",
  },
];

// selectăm containerul
var container = document.querySelector(".container");

// parcurgem lista de produse și facem carduri
products.forEach((product) => {
  var card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <p class="name">${product.name}</p>
    <img src="${product.image}" alt="${product.name}">
    <p class="price">${product.price}</p>
  `;

  container.appendChild(card);
});
