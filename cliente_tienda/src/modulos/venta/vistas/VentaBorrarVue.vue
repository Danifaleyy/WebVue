<template>
    <div class="container mt-5" v-if="ventas[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Venta</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    id_venta
                    <input type="number" class="form-control" v-model="ventas[0].id_venta" disabled>
                </div>
                <div class="mb-3">
                    id_articulo
                    <input type="number" class="form-control" v-model="ventas[0].id_articulo" disabled>
                </div>
                <div class="mb-3">
                    id_cliente
                    <input type="number" class="form-control" v-model="ventas[0].id" disabled>
                </div>
                <div class="mb-3">
                    cantidad
                    <input type="number" class="form-control" v-model="ventas[0].cantidad" disabled>
                </div>
                <div class="mb-3">
                    precio
                    <input type="number" class="form-control" v-model="ventas[0].precio" disabled>
                </div>
                <div class="mb-3">
                    iva
                    <input type="number" class="form-control" v-model="ventas[0].iva" disabled>
                </div>
                <div class="mb-3">
                    subtotal
                    <input type="number" class="form-control" v-model="ventas[0].subtotal" disabled>
                </div>
                <div class="mb-3">
                    total
                    <input type="number" class="form-control" v-model="ventas[0].total" disabled>
                </div>
                <div class="mb-3">
                    fecha_venta
                    <input type="date" class="form-control" v-model="ventas[0].fecha_venta" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarVenta(ventas[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useVenta } from '../controladores/useVenta';
const { traeVentaId, borrarVenta, mensaje, ventas } = useVenta()
//Traer los datos del registro de cada id
let idVenta = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/venta')
    }
)

onMounted(async() => {
    idVenta = Number(route.params.id_venta);
    await traeVentaId(Number(idVenta))
})
</script>

<style scoped></style>