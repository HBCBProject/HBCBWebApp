<template>
  <div class="md-layout md-alignment-center">
    <h1>HandBall Club de Blain</h1>
    <div>
      <topSponsors />
    </div>
  </div>
</template>
<script>
import topSponsors from "./TopSponsor";
export default {
  components: {
    topSponsors
  }
};
</script>
<style scoped>
.md-layout {
  flex-direction: column;
  margin: 3% 0
}
</style>