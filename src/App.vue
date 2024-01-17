<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/header/navbar.vue';
import Footer from './components/footer/Footer.vue';

</script>

<template>
  <header>
    <Navbar/>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home  </RouterLink>
        <RouterLink to="/about"> About</RouterLink>
      </nav>
    </div>
  </header>

<Footer>
  
</Footer>
  <RouterView />
</template>

<style scoped lang="scss">
@import './assets/main.scss';
</style>
