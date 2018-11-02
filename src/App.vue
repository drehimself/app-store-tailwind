<template>
  <div id="app" style="-webkit-app-region: drag" class="font-sans flex min-h-screen">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar,
  }
}
</script>


<style src="./assets/main.css">
