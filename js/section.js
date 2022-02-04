// //--------------SECTION 1
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

const imgBubble1 = document.createElement("img");
const imgBubble2 = document.createElement("img");
const imgBubble3 = document.createElement("img");

divBubblesR.className = "divBubblesR";
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
