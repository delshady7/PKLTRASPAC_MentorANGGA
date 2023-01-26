<template>
  <div>
    <center>
      <v-card class="login" max-width="344" style="margin-top: 200px" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="title mb-4">LOGIN</div>
            <div class="uname-input">
              <v-text-field
                label="Username"
                :rules="rules"
                hide-details="auto"
                v-model="username"
              ></v-text-field>
              <v-text-field
                type="password"
                label="Password"
                v-model="password"
              ></v-text-field>
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <div class="button">
            <v-btn @click.prevent="login()" outlined rounded text>
              Login
            </v-btn>
          </div>
          <div class="checkbox">
            <v-checkbox
              v-model="rm"
              label="Remember me?"
              color="info"
              value="remember"
              hide-details
            ></v-checkbox>
          </div>
        </v-card-actions>
      </v-card>
    </center>
  </div>
</template>
<script>
export default {
  data: () => ({
    set: false,
    username: null,
    password: null,
    routes: [{ path: `/web` }],
    rules: [
      (value) => !!value || "Username cannot be blank.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  methods: {
    login() {
      if (
        this.username === null ||
        this.username === "" ||
        this.password === null ||
        this.password === ""
      ) {
        alert("Username dan Password harus sesuai");
      } else if (this.username === "admin" && this.password === "admin") {
        alert("Login berhasil");
        this.$store.dispatch("tes/coba");
        this.$router.push("/web");
      } else {
        alert("Username dan Password harus sesuai");
      }
    },
  },
};
</script>
<style>
html {
  background-color: #d9d9d9;
}
.login {
  font-family: "Poppins", sans-serif;
}
.title {
  font-weight: 700;
  margin-top: 7px;
}
.button {
  margin-left: 9px;
  margin-bottom: 9px;
  font-weight: 700;
}
.checkbox {
  margin-left: 72px;
  margin-bottom: 31px;
}
</style>
