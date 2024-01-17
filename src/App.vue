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
        <!-- <RouterLink to="/Familias"> Familias</RouterLink>
        <RouterLink to="/Animales"> Animales</RouterLink>
        <RouterLink to="/Add"> Añadir</RouterLink>
        <RouterLink to="/Edit"> Editar</RouterLink>
        <RouterLink to="/Buscar"> Buscar</RouterLink> -->
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
