<template>
  <div>
    <div id="container">
      <headerBar />
      <router-view></router-view>
      <footerComponent />
    </div>
  </div>
</template>
<script>
import headerBar from "./Components/Header.vue";
import footerComponent from "./Components/Footer.vue";

export default {
  components: {
    headerBar,
    footerComponent
  }
};
</script>
<style>
h1 {
  margin-top: 0;
  color: #707070;
}

#container {
  margin-top: 120px;
}

a {
  font-size: 20px;
  font-weight: bold;
}

button {
  font-size: 20px;
  font-weight: bold;
}

.commonButton {
  border-radius: 25px;
  color: #5ba4ed;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
}

p {
  font-size: 18px;
  font-weight: 700;
  color: #707070;
}
</style>