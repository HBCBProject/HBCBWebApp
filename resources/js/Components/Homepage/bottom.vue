<template>
  <div class="container md-layout md-alignment-center-space-around">
    <md-card class="card md-layout md-alignment-center md-layout-item md-size-40">
      <md-card-content>
        <p>Match contre {{ lastMatch.opponent }}</p>
        <p>HCB Blain {{ lastMatch.teamScore }} / {{ lastMatch.opponentScore }} {{ lastMatch.opponent }}</p>
      </md-card-content>
      <md-card-actions>
        <md-button class="commonButton lastResultButton">Derniers résultats</md-button>
      </md-card-actions>
    </md-card>
    <md-card class="card md-layout md-alignment-center md-layout-item md-size-40">
      <md-card-content>
        <p>Match contre {{ nextMatch.opponent }}</p>
        <p>{{ nextMatch.date }}</p>
        <p>{{ nextMatch.place }}</p>
      </md-card-content>
      <md-card-actions>
        <md-button class="commonButton incomingMatchButton">Matchs à venir</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastMatch: {
        opponent: "Orvault",
        teamScore: "10",
        opponentScore: "0"
      },
      nextMatch: {
        opponent: "Orvault",
        date: "20 Octobre 2020",
        place: "Salle Lorem"
      }
    };
  }
};
</script>

<style scoped>
.card {
  margin: 5%;
  width: 40%;
  height: 220px;
  background-color: #5ba4ed;
  text-align: center;
  flex-direction: column;
}
.md-card > .md-card-content {
  width: 75%;
}

.md-card > .md-card-actions {
  position: absolute;
  bottom: 0;
  margin-bottom: -30px;
}

.commonButton {
  color: #707070;
  height: 44px;
}

.lastResultButton {
  background-color: #ffde6f;
}

.incomingMatchButton {
  background-color: #ed78ed;
}

@media screen and (max-width: 960px) {
  .md-card > .md-card-content {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .card {
    min-width: 100%;
    min-height: 200px;
    margin-left: 0;
  }
}
</style>