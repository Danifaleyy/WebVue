<template>
    <div class="container">
        <h1>Bienvenido a la Tienda</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Fondo con degradado */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}

/* Contenedor centrado con flexbox */
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
/* Estilo del título */
h1 {
    color: #52b788; /* Color verde para el título */
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Sombra ligera */
}
</style>
