<script setup lang="ts">
  import Menuvue from '../src/modulos/principal/vistas/Menuvue.vue';
  import {RouterView} from 'vue-router';
</script>

<template>
  <header>
    <!--Nombre del archivo donde esta la barra de menu pero se tiene que importar-->
    <!--Barra de navegacion-->
    <Menuvue/>
  </header>
  <!--Vista de personal: Estara abajo de menu de navegacion-->
  <RouterView/>
</template>
