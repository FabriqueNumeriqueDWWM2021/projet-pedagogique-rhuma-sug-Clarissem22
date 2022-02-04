export default class Produits {
  id;
  nomProduit;
  prixProduit;

  constructor(id, nomProduit, prixProduit) {
    this.id = id;
    this.nomProduit = nomProduit;
    this.prixProduit = prixProduit;
  }
  afficherUser(produits) {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    h1.textContent = this.nomProduit;
    const p = document.createElement("p");
    p.textContent = this.prixProduit;
    article.appendChild(h1);
    article.appendChild(p);
    return article;
  }
}
