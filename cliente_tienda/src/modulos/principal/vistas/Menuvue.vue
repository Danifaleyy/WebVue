<template>
    <!--Barra de navegacion-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Tienda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item margin">
                        <!--Sirve para navegar entre las rutas de Vue-->
                        <!--Creas una vista para personal en modulos, es donde estara la interfaz de esa ruta: PersonalVue.vue-->
                        <!--El archivo index.ts controla haica donde va a ir cuando le picas a ese url-->
                        <RouterLink class="nav-link item" to="/clientes">Clientes</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <!--Sirve para navegar entre las rutas de Vue-->
                        <RouterLink class="nav-link item" to="/personal">Personal</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <!--Sirve para navegar entre las rutas de Vue-->
                        <RouterLink class="nav-link item" to="/articulos">Articulos</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <!--Sirve para navegar entre las rutas de Vue-->
                        <RouterLink class="nav-link item" to="/ventas">Ventas</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <!--Sirve para navegar entre las rutas de Vue-->
                        <RouterLink class="nav-link item" to="/clientes/registro">Registro</RouterLink>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>