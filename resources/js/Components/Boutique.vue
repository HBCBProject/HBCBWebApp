<template>
    <div>


        <div class="titre">
            <h1>Boutique</h1>
            <p>Voici la boutique, ici vous pourrez commander les maillots des équipes</p>
        </div>

        <div class="background">
            <div class="flexible-horizon">
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                  <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                   <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                 </div>
            </div>
            <div class="flexible-horizon">
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
            </div>
            <div class="flexible-horizon">
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hauthomme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Homme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
                <div class="block-img">
                    <img class="Tshirt" src="../assets/pictures/hautfemme.png" alt="Un T-shirt à vendre"/>
                    <p class="NomArticle">T-shrit Femme</p>
                    <p class="DescriArticle">Voici la description de l'article</p>
                    <p class="PrixArticle">15.00€</p>
                    <div class="CommanderArticle">Commander</div>
                </div>
            </div>
        </div>
        <div class="titre">
            <div class="Panier">Votre Commande</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.flexible-horizon
{
    display:flex;
    margin-left:6%;
}

.block-img
{
    display:block;
    width:20%;
    max-width:20%;
    height:10%;
    max-height:10%;
    background-color: rgb(222, 222, 228);
    margin:2%;
    border-radius:20px;
    box-shadow: 10px 5px 5px rgb(51, 51, 51);
    opacity: 0.97;
}
.block-img:hover
{
    background-color: rgb(235, 235, 238);
    opacity: 1;
    transition: 100ms;
}

.Tshirt
{
    margin-top: 5%;
    width:50%;
    height:auto;
    margin-left: 25%;
    color:black;
}

.NomArticle
{
    margin-left: 2%;
    font-weight:bold;
    color:black;
}
.DescriArticle
{
    margin-left: 2%;
    font-style:italic;
    color:black;
}
.PrixArticle
{
    margin-left: 2%;
    font-weight:bold;
    text-decoration: underline;
    color:black;
}

.CommanderArticle
{
    display:block;
    border-radius:20px;
    width:50%;
    line-height:300%;
    text-align:center;
    color:rgb(255, 255, 255);
    background-color: rgb(17, 51, 201);
    text-decoration:none;
    margin-left:25%;
    margin-bottom: 5%;
    box-shadow: 8px 5px 5px rgb(96, 96, 97);
}
.CommanderArticle:hover
{
    background-color: rgb(255, 255, 255);
    color:black;
    transition: 200ms;
    cursor:pointer;
}


.Panier
{
    display:block;
    border-radius:20px;
    width:20%;
    line-height:350%;
    font-size: 130%;
    text-align:center;
    color:rgb(255, 255, 255);
    background-color: rgb(17, 51, 201);
    text-decoration:none;
    margin-left:40%;
    margin-top:5%;
    margin-bottom: 5%;  
    box-shadow: 4px 3px 2px black;
}
.Panier:hover
{
    background-color: white;
    color:black;
    transition: 450ms;
    cursor:pointer;
}

.titre
{
    background-image: url(../assets/pictures/hand3.png);
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
    padding:5% 0;
    margin-bottom:0.5%;
    margin-top: -0.5%;
}

.titre h1
{

    color:White;
}

.titre p
{
    color:white;
}

.background
{
    background-image: url(../assets/pictures/handball2.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    background-size: 100%;
    background-attachment: fixed;
    margin-bottom: 1%;
}



</style>