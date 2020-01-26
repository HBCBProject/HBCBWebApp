<template>
  <div class="container md-layout md-alignment-center">
    <h1>Nos équipes</h1>
    <div class="md-layout md-alignment-center">
      <div class="textButton md-layout-item md-size-40 md-small-size-90">
        <p>Description des équipes passés / présentes / futurs du club.</p>
        <md-button class="commonButton md-raised">Page équipes</md-button>
      </div>
      <img
        src="../../assets/pictures/actu.jpg"
        class="md-layout-item md-size-60 md-xsmall-size-100"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  flex-direction: column;
}

.container > * {
  margin-bottom: 5%;
}

p {
  margin: 0 auto 5% auto;
  width: 65%;
}

.textButton {
  text-align: center;
}

@media screen and (max-width: 960px) {
  .container > .md-layout {
    flex-direction: column;
  }

  img {
    max-height: 200px;
  }

  .container > * {
    margin-bottom: 10%;
  }

  .textButton {
    margin-bottom: 10%;
  }

  p {
    width: 90%;
  }
}
</style>