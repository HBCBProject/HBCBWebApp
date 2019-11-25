<template>
<div>
<!-- Bandeau pricipal (Penser à le figer !! + Lien Pages) -->

    <div class="bandeau">
        <img class=logo src="./logo.png"/>
        <div class="contenuBandeau">
        <button>ACCUEIL</button>
        <button>LE CLUB</button>
        <button>CALENDRIER</button>
        <button>EQUIPES</button>
        <button>SPONSORS</button>
        <button>BOUTIQUE</button>
        <button>GALERIE</button>        
        <button>CONTACT</button>
        </div>
        <!-- Futur bouton "Se Connecter" - Prévoir Forumaire de connexion -->
    </div>

    <!-- Carouselle d'Images Sponsors -->

    <div class="carouselle">
		<img src="./Sponsors1.png" alt="Image bleue" />
		<img src="./Sponsors2.jpg" alt="Image verte" />
        <img src="./Sponsors3.png" alt="Image verte" />
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.carouselle img{
    width: 18em;
    height: 12em;
}
.carouselle{
    margin: 0 auto;
    text-align: center;
    width: 65%;
    height: 40%;
}
.contenuBandeau{
    margin-left: 4%;
    width: 60%;
}
.bandeau{
    display:flex;
}
button{
    margin-top: 1.5em;
    background-color: goldenrod;
    color: darkblue;
    font-size: 1em;
    font-weight: bolder;
    letter-spacing: 0.1em;
    width: 12%;
    height: 50px;
}
.logo{
    margin: 1.5em;
    margin-left: 5em;
}
</style>