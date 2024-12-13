<template>
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/bienvenida">
                <img id="Logo" src="../vistas/tienda.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/clientes">Cliente</RouterLink>
                        </li>
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/personal">Personal</RouterLink>
                        </li>
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/articulos">Articulo</RouterLink>
                        </li>
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/venta">Venta</RouterLink>
                        </li>
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/registro">Registro</RouterLink>
                        </li>
                        <li class="nav-item margin">
                            <RouterLink class="nav-link item" to="/compra">Compra</RouterLink>
                        </li>
                        <li class="nav-item margin" v-if="usuarioAutenticado">
                            <button @click.prevent="cerrarSesion" class="nav-link btn btn-link">
                                Salir
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const usuarioAutenticado = ref(false);
const auth = getAuth();
const router = useRouter();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        usuarioAutenticado.value = !!user;
    });
});

const cerrarSesion = async () => {
    try {
        await signOut(auth);
        router.push('/bienvenida');
    } catch (error) {
        console.log('Error al cerrar sesión', error);
    }
};
</script>

<style scoped>
.navbar {
    background-color: #40916c;
}

.navbar-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    row-gap: 40px;
}

#Logo {
    max-height: 40px;
    max-width: 40px;
    border-radius: 25%;
    transition: transform 0.2s ease, filter 0.3s ease;
}

/* Animación del logo al pasar el mouse */
#Logo:hover {
    transform: scale(1.1); /* Aumenta ligeramente el tamaño */
    filter: brightness(1.2); /* Hace que el logo se vea más brillante */
}

.nav-link {
    color: #F9F6EE;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

/* Animación sutil al pasar el mouse sobre los botones */
.nav-link:hover {
    color: #F9F6EE;
    background-color: #52b788;
    transform: scale(1.05);
}

/* Botón de salir con animaciones ligeras */
.btn-link {
    color: white;
    background-color: #6a040f;
    font-size: 1rem;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.btn-link:hover {
    color: #ffffff;
    background-color: #ff6b6b;
    transform: scale(1.05);
}
</style>
