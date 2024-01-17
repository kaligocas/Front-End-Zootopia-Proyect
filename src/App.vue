<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';





 
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <router-link to="/añadir">Añadir</router-link>
      </nav>
    </div>
  </header>
  <Add/>
  <Edit/>

  <RouterView />
</template>

<style scoped lang="scss">

</style>
