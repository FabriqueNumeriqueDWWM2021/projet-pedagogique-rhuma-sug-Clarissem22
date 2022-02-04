const response = await fetch("dbClient.php");
const data = await response.json();
console.log(data);

// data.forEach(element => {
//     const h1 = document.createElement("h1");
//     h1.textContent = element.id;
//     const p = document.createElement("p");
//     p.textContent = user.pseudo;
//     document.body.appendChild(h1);
//     document.body.appendChild(p);
// });
