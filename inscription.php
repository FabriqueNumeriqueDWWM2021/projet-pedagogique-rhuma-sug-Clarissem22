<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon compte</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <?php include "./header.php" ?>
    <section class="section3">
        <div class="divLeft3">

            <div>
                <img class="imgS2" src="img/Moncompte.png">
                <div></div>
            </div>
        </div>

        <div class="divRight3">
            <div class="divBubbleR">
                <img class="imgS3" src="img/Buuuble.png">
                <div class="divProduitS3">
                    <div>
                        <h1>Créer un compte</h1>
                    </div>
                    <div class="form_inscription">
                        <form method="POST" action="database_inscription.php">
                            <input type="text" name="nom" id="nom" placeholder="Nom" required />
                            <input type="text" name="prenom" id="prenom" placeholder="Prénom" required />
                            <input type="email" name="email" id="email" placeholder="Adresse mail" required />
                            <input type="tel" name="telephone" id="telephone" placeholder="Numéro de téléphone" required />
                            <input type="text" name="adresse" id="adresse" placeholder="Adresse" required />
                            <input type="text" name="ville" id="ville" placeholder="Ville" required />
                            <input type="text" name="codepostal" id="codepostal" placeholder="Code postal" required />
                            <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" required />
                            <input type="text" name="motdepasse" id="motdepasse" placeholder="Mot de passe" required />
                        </form>
                    </div>
                    <div>
                        <img class="ajoutPanier" src="img/Inscription.png" alt="">
                    </div>
                </div>


            </div>
        </div>


    </section>
    <script type="module" src="./main.js"> </script>
    <script type="module" src="./insererProduit.js"> </script>

</body>

</html>