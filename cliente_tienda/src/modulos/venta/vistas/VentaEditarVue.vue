<template>
    <div class="container mt-5" v-if="ventas[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Venta</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    id_venta
                    <input type="number" class="form-control" v-model="ventas[0].id_venta" disabled>
                </div>
                <div class="mb-3">
                    id_articulo
                    <input type="number" class="form-control" v-model="ventas[0].id_articulo">
                </div>
                <div class="mb-3">
                    id_cliente
                    <input type="number" class="form-control" v-model="ventas[0].id">
                </div>
                <div class="mb-3">
                    cantidad
                    <input type="number" class="form-control" v-model="ventas[0].cantidad">
                </div>
                <div class="mb-3">
                    precio
                    <input type="number" class="form-control" v-model="ventas[0].precio">
                </div>
                <div class="mb-3">
                    iva
                    <input type="number" class="form-control" v-model="ventas[0].iva">
                </div>
                <div class="mb-3">
                    subtotal
                    <input type="number" class="form-control" v-model="ventas[0].subtotal">
                </div>
                <div class="mb-3">
                    total
                    <input type="number" class="form-control" v-model="ventas[0].total">
                </div>
                <div class="mb-3">
                    fecha_venta
                    <input type="date" class="form-control" v-model="ventas[0].fecha_venta">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarVenta(ventas[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVenta } from '../controladores/useVenta';
const { traeVentaId, actualizarVenta, mensaje, ventas } = useVenta()
//Traer los datos del registro de cada id
let idVenta = 0
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
                routeRedirect.push('/venta'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idVenta = Number(route.params.id_venta);
    await traeVentaId(Number(idVenta))
})
</script>

<style scoped>
    
</style>