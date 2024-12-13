<template>
    <div class="container mt-5" v-if="compras[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Compra</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
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
                    <input type="number" class="form-control" v-model="compras[0].id_articulo">
                </div>
                <div class="mb-3">
                    cantidad
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].cantidad">
                </div>
                <div class="mb-3">
                    precio
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].precio" >
                </div>
                <div class="mb-3">
                    iva
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].iva" >
                </div>
                <div class="mb-3">
                    subtotal
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].subtotal" >
                </div>
                <div class="mb-3">
                    total
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="compras[0].total">
                </div>
                <div class="mb-3">
                    fecha_compra
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="compras[0].fecha_compra">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarCompra(compras[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCompra } from '../controladores/useCompra';
const { traeCompraId, actualizarCompra, mensaje, compras } = useCompra()
//Traer los datos del registro de cada id
let idCompra = 0
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
                routeRedirect.push('/compra'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idCompra = Number(route.params.id_compra);
    await traeCompraId(Number(idCompra))
})
</script>

<style scoped>
    
</style>