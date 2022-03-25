<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @Close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="authenticating" fixed> </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div v-if="mode === 'signup'" class="form-control">
          <label for="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" v-model="cpassword" />
        </div>
        <p v-if="!formIsValid" class="danger">
          Please enter valid email and password(length more than 6 characters
        </p>
        <base-button>{{ switchButtonCaption }}</base-button>
        <small>
          <base-button type="button" mode="flat" @click="switchAuthMode">{{
            switchModeButtonCapption
          }}</base-button></small
        >
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCapption() {
      if (this.mode === "login") {
        return "Dont have and account? signup instead";
      } else {
        return "Already have an account? login";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", actionPayload);
        } else {
          await this.$store.dispatch("signup", actionPayload);

        }
        const redirectUrl = '/'+ (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || "failed to autenticate. try later";
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;

  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
