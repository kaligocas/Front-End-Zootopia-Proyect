<script lang="ts" setup>

</script>

<template>
<h1><nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Zootopia</a>
    <img class= "img-logo" width="90" height="90" src="../../assets/img/icons8-cat-footprint-96 (1).png" alt="cat-footprint"/>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Familias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Animales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Añadir</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Editar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Buscar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</h1>
</template>
<style scoped lang="scss">
@import '../../assets/navbar.scss';
</style>