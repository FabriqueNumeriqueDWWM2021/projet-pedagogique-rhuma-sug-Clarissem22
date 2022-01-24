const header = document.createElement("div");
const logo = document.createElement("img");
const compte = document.createElement("img");
const panier = document.createElement("img");

header.className = "header";
compte.className = "compte";
panier.className = "panier";

document.body.appendChild(header);
header.appendChild(logo);
header.appendChild(compte);
header.appendChild(panier);

logo.src = "img/Logo.png";
compte.src = "img/Compte.png";
panier.src = "img/compte.png";

