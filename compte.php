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
    <?php include "template/header.php" ?>

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
                        <h1>Accéder à mon compte</h1>
                    </div>
                    <div class="form_compte">
                        <form method="POST" action="database_compte.php">
                            <input class="input" type="text" name="pseudo" id="pseudo" placeholder="Pseudo" required />
                            <input class="input" type="text" name="motdepasse" id="motdepasse" placeholder="Mot de passe" required /> <br>
                            <input class="formsend" type="submit" value="Connexion" name="formsend" id="formsend">

                        </form>
                    </div>
                    <div>
                        <img class="inscription" src="img/Inscription.png" alt="">
                    </div>
                </div>

                <div class="tortue">
                    <img src="img/bulleTortue.png" alt="">
                </div>

            </div>
        </div>


    </section>
    <script src="js/main.js"> </script>
    <script type="module" src="./insererProduit.js"> </script>

</body>

</html>