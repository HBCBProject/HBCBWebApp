<template>
  <div class="container">
    <top />
    <news />
    <teams />
    <bottom />
  </div>
</template>
<script>
import top from "./Homepage/Top";
import news from "./Homepage/news";
import teams from "./Homepage/teams";
import bottom from "./Homepage/bottom";

export default {
  components: {
    top,
    news,
    teams,
    bottom
  }
};
</script>
<style scoped>
.container {
    margin: 0 5%
}
</style>