<template>
    <div class="container mt-5" v-if="clientes[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Cliente</h4>
            </div>
            <div class="alert alert-warning" role="alert">
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="clientes[0].id" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="clientes[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    Direccion
                    <input type="text" class="form-control" v-model="clientes[0].direccion" disabled>
                </div>
                <div class="mb-3">
                    Telefono
                    <input type="text" class="form-control" v-model="clientes[0].telefono" disabled>
                </div>
                <div class="mb-3">
                    Correo
                    <input type="text" class="form-control" v-model="clientes[0].correo_electronico" disabled>
                </div>
                <div class="mb-3">
                    Ciudad
                    <input type="text" class="form-control" v-model="clientes[0].ciudad" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarCliente(clientes[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useClientes } from '../controladores/useClientes';

const { traeClienteId, borrarCliente, mensaje, clientes } = useClientes()
// Traer los datos del registro de cada id
let idCliente = 0;
// Para los parámetros de la URL
const route = useRoute();
// Para redirigir después de la operación
const routeRedirect = useRouter();

// Observador: se activa cuando el mensaje cambia
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/clientes')
    }
)
onMounted(async() => {
    idCliente = Number(route.params.id);
    await traeClienteId(Number(idCliente))
})
</script>

<style scoped>
/* Estilos si es necesario */
</style>
