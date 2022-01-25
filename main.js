// ----------------------HEADER

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
panier.src = "img/Panier.png";

//--------------SECTION 1
// ----------------LEFT-------------
const section1 = document.createElement("section");
const divLeft1 = document.createElement("div");
const imgAcc = document.createElement("img");

imgAcc.className = "imgAcc";
imgAcc.src = "img/Accueil(2).png";

document.body.appendChild(section1);
section1.appendChild(divLeft1);
divLeft1.appendChild(imgAcc);

// -----------------RIGHT-----------------
const divRight1 = document.createElement("div");
const divBubble1 = document.createElement("div");
const divBubble2 = document.createElement("div");
const divBubble3 = document.createElement("div");
const imgBubble1 = document.createElement("img");
const imgBubble2 = document.createElement("img");
const imgBubble3 = document.createElement("img");

imgBubble1.className = "imgBubble1";
imgBubble1.src = "img/image 2.png";
imgBubble2.className = "imgBubble2";
imgBubble2.src = "img/image 2.png";
imgBubble3.className = "imgBubble3";
imgBubble3.src = "img/image 2.png";

section1.appendChild(divRight1);
divRight1.appendChild(divBubble1);
divRight1.appendChild(divBubble2);
divRight1.appendChild(divBubble3);
divBubble1.appendChild(imgBubble1);
divBubble2.appendChild(imgBubble2);
divBubble3.appendChild(imgBubble3);

// SECTION 2

const section2 = document.createElement("section");
const divLeft2 = document.createElement("div");
const imgS2 = document.createElement("img");

imgS2.className = "imgS2";
imgS2.src = "img/Accueil(2).png";

document.body.appendChild(section2);
section2.appendChild(divLeft2);
divLeft2.appendChild(imgS2);

// SECTION 3

const section3 = document.createElement("section");
const divLeft3 = document.createElement("div");
const imgS3 = document.createElement("img");

imgS3.className = "imgS3";
imgS3.src = "img/Accueil(2).png";

document.body.appendChild(section3);
section3.appendChild(divLeft3);
divLeft3.appendChild(imgS3);
