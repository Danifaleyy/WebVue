<template>
    <div class="container mt-5" v-if="compras[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Compra</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    id_compra
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].id_compra" disabled>
                </div>
                <div class="mb-3">
                    id_articulo
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].id_articulo" disabled>
                </div>
                <div class="mb-3">
                    cantidad
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].cantidad" disabled>
                </div>
                <div class="mb-3">
                    precio
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].precio" disabled>
                </div>
                <div class="mb-3">
                    iva
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].iva" disabled>
                </div>
                <div class="mb-3">
                    subtotal
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].subtotal" disabled>
                </div>
                <div class="mb-3">
                    total
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].total" disabled>
                </div>
                <div class="mb-3">
                    fecha_compra
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="compras[0].fecha_compra" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarCompra(compras[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCompra } from '../controladores/useCompra';
const { traeCompraId, borrarCompra, mensaje, compras } = useCompra()
//Traer los datos del registro de cada id
let idCompra = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/compra')
    }
)

onMounted(async() => {
    idCompra = Number(route.params.id_compra);
    await traeCompraId(Number(idCompra))
})
</script>

<style scoped></style>