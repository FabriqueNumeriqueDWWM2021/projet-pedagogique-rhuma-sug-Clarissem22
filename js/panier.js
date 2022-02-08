import Produits from "./panier.js";
import Produits from "./insererProduit.js";
const response = await fetch("dbPanier.php");
const data = await response.json();

data.afficherUser();
