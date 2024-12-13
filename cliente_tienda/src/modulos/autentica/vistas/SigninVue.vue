<!--REGISTRARSE-->
<template>
    <div class="contededor_padre">
        <div class="contenedor">
        <form @submit.prevent="entradaUsuario" class="formulario">
            <h2>Validacion de usuario</h2>
            <div class="grupo">
                <label>Correo:</label>
                <input 
                    type="email" 
                    v-model="correo"
                    required
                >
            </div>
            <div class="grupo">
                <label>Contraseña:</label>
                <input 
                    type="password" 
                    v-model="clave"
                    required
                >
            </div>
            <div class="error" v-if="error">
                {{ error }}
            </div>
            <button type="submit">
                Registrarse
            </button>
        </form>
    </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';
    import '../../../firebase/config.js';
    const correo = ref('');
    const clave = ref('');
    const error = ref(null);
    const router = useRouter();

    const entradaUsuario = async () => {
    const error = ref<string | null>(null);
    
    try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, correo.value, clave.value);
        router.push({ name: 'personal' });
    } catch (err) {
        if (err instanceof Error && 'code' in err) {
            switch ((err as { code: string }).code) {
                case 'auth/user-not-found':
                    error.value = "Usuario no encontrado";
                    break;
                case 'auth/wrong-password':
                    error.value = "Contraseña incorrecta";
                    break;
                default:
                    error.value = "Ocurrio un error al iniciar sesion";
                    break;
            }
        } else {
            error.value = "Error desconocido.";
        }
    }
}

</script>

<style scoped>
    .contededor_padre {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor{
        max-width: 400px;
        margin: 0px auto;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 4px 20px #181b1a; /* Sombra con el mismo color para el borde */
        background-color: #40916c;
    }
    .formulario{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .grupo{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    input{
        padding: 8px;
        border: 1px solid #DDD;
        border-radius: 5px;
    }
    button{
        padding: 10px;
        background-color: #95d5b2;
        color: #081c15;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 60%;
        align-self: center;
        font-weight: bold;
    }
    .error{
        color: red;
        font-size: 0.9em;
        margin-top: 0.5em;
    }
    h2{
        color: white;
    }
    label{
        font-weight: bold;
        color: #081c15;
    }
</style>