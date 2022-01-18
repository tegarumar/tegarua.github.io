<template>
  <div id="app">
    <template v-if="$route.name != 'Page404'">
      <Navbar />
    </template>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
}
</style>
