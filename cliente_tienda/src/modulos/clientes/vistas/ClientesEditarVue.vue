<template>
    <div class="container mt-5" v-if="clientes[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Cliente</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                Datos actualizados con éxito
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
                    <input type="text" class="form-control" v-model="clientes[0].nombre">
                </div>
                <div class="mb-3">
                    Direccion
                    <input type="text" class="form-control" v-model="clientes[0].direccion">
                </div>
                <div class="mb-3">
                    Telefono
                    <input type="text" class="form-control" v-model="clientes[0].telefono">
                </div>
                <div class="mb-3">
                    Correo
                    <input type="text" class="form-control" v-model="clientes[0].correo_electronico">
                </div>
                <div class="mb-3">
                    Ciudad
                    <input type="text" class="form-control" v-model="clientes[0].ciudad">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarCliente(clientes[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClientes } from '../controladores/useClientes';

const { traeClienteId, actualizarCliente, mensaje, clientes } = useClientes()
//Traer los datos del registro de cada id
let idCliente = 0
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
                routeRedirect.push('/clientes'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idCliente = Number(route.params.id);
    await traeClienteId(Number(idCliente))
})


</script>

<style scoped>

</style>