const compte = document.querySelector(".compte");
const panier = document.querySelector(".panier");
const logo = document.querySelector(".logo");
const inscription = document.querySelector(".inscription");
const achat = document.querySelector(".continuerAchat");

compte.addEventListener("click", function () {
  document.location.href = "http://localhost/Rhuma_sug/compte.php";
});

panier.addEventListener("click", function () {
  document.location.href = "http://localhost/Rhuma_sug/panier.php";
});

logo.addEventListener("click", function () {
  document.location.href = "http://localhost/Rhuma_sug";
});

inscription.addEventListener("click", function () {
  document.location.href = "http://localhost/Rhuma_sug/inscription.php";
});

// achat.addEventListener("click", function () {
//   document.location.href = "http://localhost/Rhuma_sug";
// });

// --------------
const tortue = document.querySelector(".tortue");

tortue.addEventListener("mousemove", (event) => {
  tortue.style.left = (event.x / window.innerWidth) * 100 + "%";
  tortue.style.right = (event.x / window.innerWidth) * 100 + "%";
});

// function createBubbles(nbBubbles, size, color, speed, x, y) {
//   for (let i = 0; i < nbBubbles; i++) {
//     let bubble = new Bubble(size, color, speed, x, y);
//     bubbles.push(bubble);
//   }
// }

// import User from "./User.js";

// const response = await fetch("data/data.json");
// const users = await response.json();

// users.forEach((user) => {
//   //Affichage sans classe User :
//   //   const article = afficherUser(user);
//   //   document.body.appendChild(article);

//   // Affichage avec classe User :
//   const currentUser = new User(user.id, user.pseudo, user.email);
//   const article = currentUser.afficherUser();
//   document.body.appendChild(article);
// });
