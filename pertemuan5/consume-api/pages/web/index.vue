<template>
  <div class="home" style="height: 100vh">
    <div class="title" style="margin-top: 80px; font-size: 35px">
      <center>Dad Jokes</center>
    </div>
    <div class="search" style="margin-top: 70px; background-color: #d9d9d9">
      <v-container>
        <center>
          <v-card
            color="lighten-4"
            flat
            height="140px"
            style="background-color: #d9d9d9"
          >
            <v-toolbar>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-text-field
                v-model="sb"
                placeholder="Search a Dad Jokes"
                style="border-radius: 56px"
              ></v-text-field>
            </v-toolbar>
          </v-card>
        </center>
      </v-container>
    </div>
    <div v-if="sb === null || sb === ''">
      <center>
        <p>Data not Available</p>
      </center>
    </div>
    <div v-else>
      <div>
        <h2>Results: {{ dadjokes.length }}</h2>
      </div>
      <div v-for="jokes in dadjokes.results" :key="jokes.id">
        <v-container>
          <v-card
            height="120px"
            style="background-color: #ffff; border-radius: 16px"
          >
            <v-card-text>
              {{ jokes.joke }}
            </v-card-text>
          </v-card>
          <br />
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "IndexPage",
  data: () => ({
    sb: null,
    dadjokes: {},
    itemResult: [
      "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
      "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
      "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
      "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
    ],
  }),
  methods: {
    // async asyncData() {
    //   const api = "https://icanhazdadjoke.com/search";
    //   const dadjokes = await axios.get(api).then((response) => {
    //     return response.data;
    //   });
    //   return { dadjokes };
    // },
    ambildata() {
      const api = "https://icanhazdadjoke.com/search";
      axios
        .get(api, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          this.dadjokes = response.data;
        });
    },
  },
  created() {
    this.ambildata();
  },
};
</script>
<style>
html {
  background-color: #d9d9d9;
}
.home {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  background-color: #d9d9d9;
}
.home h2 {
  font-size: 16px;
  margin-left: 100px;
}
</style>
