<template>
    <div>
        <h1>Boutique</h1>

        <p>Voici la boutique, ici vous pourrez commander les maillots des équipes</p>
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
        <div class="Panier">Votre Commande</div>
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
    box-shadow: 10px 5px 5px rgb(168, 168, 170);
}
.block-img:hover
{
    background-color: rgb(235, 235, 238);
}

.Tshirt
{
    margin-top: 5%;
    width:50%;
    height:auto;
    margin-left: 25%;
}

.NomArticle
{
    margin-left: 2%;
    font-weight:bold;
}
.DescriArticle
{
    margin-left: 2%;
    font-style:italic;
}
.PrixArticle
{
    margin-left: 2%;
    font-weight:bold;
    text-decoration: underline;
}

.CommanderArticle
{
    display:block;
    border-radius:20px;
    width:50%;
    line-height:300%;
    text-align:center;
    color:rgb(255, 255, 255);
    background-color: rgb(175, 172, 172);
    text-decoration:none;
    margin-left:25%;
    margin-bottom: 5%;
    box-shadow: 8px 5px 5px rgb(96, 96, 97);
}
.CommanderArticle:hover
{
    background-color: rgb(255, 255, 255);
    color:black;
}


.Panier
{
    display:block;
    border-radius:20px;
    width:16%;
    line-height:300%;
    text-align:center;
    color:rgb(255, 255, 255);
    background-color: rgb(156, 153, 153);
    text-decoration:none;
    margin-left:42%;
    margin-bottom: 5%;
    box-shadow: 8px 5px 5px rgb(96, 96, 97);
}
.Panier:hover
{
    background-color: rgb(235, 235, 238);
    color:black;
}
</style>