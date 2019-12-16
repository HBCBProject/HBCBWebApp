<template>
  <div>
    <div id="container">
      <headerBar></headerBar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import headerBar from "./Components/Header.vue";

export default {
  components: {
    headerBar
  }
};
</script>
<style>
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
</style>