<template>
    <div class="container mt-5" v-if="registros[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Registro</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="registros[0].id_registro" disabled>
                </div>
                <div class="mb-3">
                    Id_personal
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="registros[0].id">
                </div>
                <div class="mb-3">
                    fecha
                    <input type="text" class="form-control" v-model="registros[0].fecha">
                </div>
                <div class="mb-3">
                    hora
                    <input type="text" class="form-control" v-model="registros[0].hora">
                </div>
                <div class="mb-3">
                    movimiento
                    <input type="text" class="form-control" v-model="registros[0].movimiento">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarRegistro(registros[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRegistro } from '../controladores/useRegistro';
const { traeRegistroId, actualizarRegistro, mensaje, registros } = useRegistro()
//Traer los datos del registro de cada id
let idRegistro = 0
const route = useRoute()


//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de articulo
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/registro'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idRegistro = Number(route.params.id_registro);
    await traeRegistroId(Number(idRegistro))
})
</script>

<style scoped>
    
</style>