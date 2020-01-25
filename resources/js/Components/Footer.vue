<template>
  <div class="container">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-layout routerText">
        <router-link :to="{name: 'home'}">Accueil</router-link>
        <router-link :to="{name: 'home'}">Vie du club</router-link>
      </div>
      <div class="md-layout-item md-layout routerText">
        <router-link :to="{name: 'home'}">Info pratique</router-link>
        <router-link :to="{name: 'home'}">Boutique</router-link>
      </div>
      <div class="md-layout-item md-layout routerText">
        <router-link :to="{name: 'home'}">Sponsors</router-link>
        <router-link :to="{name: 'home'}">Galerie</router-link>
      </div>
      <div class="md-layout-item md-layout routerText">
        <router-link :to="{name: 'home'}">Contact</router-link>
        <router-link :to="{name: 'home'}">Galerie</router-link>
      </div>
      <div class="md-layout-item md-layout md-alignment-center-space-around">
        <router-link to="https://vuematerial.io/ui-elements/layout">
          <img src="..\assets\pictures\facebook.png" />
        </router-link>
        <router-link to="https://vuematerial.io/ui-elements/layout">
          <img src="..\assets\pictures\instagram.png" />
        </router-link>
      </div>
    </div>
    <div class="md-layout md-alignment-bottom-center">
      <p class="md-layout-item">Mention Légale - 2020</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffde6f;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.2),
    0 -4px 5px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0);
  text-align: center;
  margin-top: 5%;
}
.md-layout {
  margin: 0 3%;
}

.md-layout-item {
  margin-top: 5%;
}

.routerText {
  flex-direction: column;
}

.routerText * {
  margin: 5% 0;
  text-align: left;
  white-space: nowrap;
  color: #707070;
}

img {
  width: 35px;
  margin-top: 50%;
}

p {
  margin: 0;
}
</style>