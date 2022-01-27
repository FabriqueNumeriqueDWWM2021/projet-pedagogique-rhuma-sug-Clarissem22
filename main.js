// ----------------------HEADER

const header = document.createElement("div");
const divLogo = document.createElement("div");
const logo = document.createElement("img");
const divBubbles = document.createElement("div");
const compte = document.createElement("img");
const panier = document.createElement("img");

header.className = "header";
divLogo.className = "divLogo";
logo.className = "logo";
divBubbles.className = "divBubbles";
compte.className = "compte";
panier.className = "panier";

document.body.appendChild(header);
header.appendChild(divLogo);
header.appendChild(divBubbles);
divLogo.appendChild(logo);
divBubbles.appendChild(compte);
divBubbles.appendChild(panier);

logo.src = "img/Logo.png";
compte.src = "img/Compte.png";
panier.src = "img/Panier.png";

//--------------SECTION 1
// ----------------LEFT-------------
const section1 = document.createElement("section");
const divLeft1 = document.createElement("div");
const imgAcc = document.createElement("img");

section1.className = "section1";
divLeft1.className = "divLeft";
imgAcc.className = "imgAcc";
imgAcc.src = "img/Accueil(2).png";
divLeft1.className = "divLeft1";

document.body.appendChild(section1);
section1.appendChild(divLeft1);
divLeft1.appendChild(imgAcc);

// -----------------RIGHT-----------------
const divRight1 = document.createElement("div");
const divBubblesR = document.createElement("div");
// const divBubble1 = document.createElement("div");
// const divBubble2 = document.createElement("div");
// const divBubble3 = document.createElement("div");
const imgBubble1 = document.createElement("img");
const imgBubble2 = document.createElement("img");
const imgBubble3 = document.createElement("img");

divBubblesR.className = "divBubblesR";
// divBubble1.className = "divBubble1";
// divBubble2.className = "divBubble2";
// divBubble3.className = "divBubble3";
imgBubble1.className = "imgBubble1";
imgBubble1.src = "img/BubbleBob.png";
imgBubble2.className = "imgBubble2";
imgBubble2.src = "img/BubbleRhum.png";
imgBubble3.className = "imgBubble3";
imgBubble3.src = "img/BubbleSug.png";

section1.appendChild(divRight1);
divRight1.appendChild(divBubblesR);
divBubblesR.appendChild(imgBubble1);
divBubblesR.appendChild(imgBubble2);
divBubblesR.appendChild(imgBubble3);
// divBubble1.appendChild(imgBubble1);
// divBubble2.appendChild(imgBubble2);
// divBubble3.appendChild(imgBubble3);

// // SECTION 2

// const section2 = document.createElement("section");
// const divLeft2 = document.createElement("div");
// const imgS2 = document.createElement("img");
// const aboutus = ducument.createElement("div");

// section2.className = "section2";
// divLeft2.className = "divLeft2";
// imgS2.className = "imgS2";
// imgS2.src = "img/BubbleBob.png";

// document.body.appendChild(section2);
// section2.appendChild(divLeft2);
// divLeft2.appendChild(imgS2);

// // RIGHT
// // SECTION 3

// const section3 = document.createElement("section");
// const divLeft3 = document.createElement("div");
// const imgS3 = document.createElement("img");

// imgS3.className = "imgS3";
// imgS3.src = "img/Accueil(2).png";

// document.body.appendChild(section3);
// section3.appendChild(divLeft3);
// divLeft3.appendChild(imgS3);
