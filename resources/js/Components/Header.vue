<template>
  <header>
    <router-link to="{name: 'home'}">
        <img src="..\assets\pictures\Logo.jpg" alt="logo HBCB" />
    </router-link>
    <div class="container">
      <router-link to="{name: 'home'}">Accueil</router-link>
      <router-link to="{name: 'home'}">Vie du club</router-link>
      <router-link to="{name: 'home'}">Equipes</router-link>
      <router-link :to="{name: 'Sponsors'}">Sponsors</router-link>
      <router-link to="{name: 'home'}">Boutiques</router-link>
      <router-link to="{name: 'home'}">Galerie</router-link>
      <router-link to="{name: 'home'}">Infos pratiques</router-link>
      <router-link to="{name: 'home'}">Contacts</router-link>
      <router-link to="{name: 'home'}">Plan d'accés</router-link>
    </div>

    <button class="connexionButton">Se connecter</button>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  background-color: rgb(252, 220, 116);
  height: 85px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 2px 10px #909090;
}

.connexionButton {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #5ba4ed;
  color: #707070;
  border: none
}

.container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  margin-left: 100px
}

.container > * {
  margin-left: 2%;
}

a {
  color: #707070;
  font-size: 20px;
  text-decoration: none;
}

img {
  position: absolute;
  height: 85px;
  top: 0;
  left: 0;
  border-radius: 50%
}
</style>