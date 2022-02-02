<template>
  <the-header title="Remember me"></the-header>
  <the-resources></the-resources>

  
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from './components/learn/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources
  
  }
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
