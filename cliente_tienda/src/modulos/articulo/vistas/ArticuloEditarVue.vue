<template>
    <div class="container mt-5" v-if="articulos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Articulo</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="articulos[0].id_articulo" disabled>
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="articulos[0].descripcion">
                </div>
                <div class="mb-3">
                    precio
                    <input type="text" class="form-control" v-model="articulos[0].precio">
                </div>
                <div class="mb-3">
                    cantidad_almacen
                    <input type="text" class="form-control" v-model="articulos[0].cantidad_almacen">
                </div>
                <div class="mb-3">
                    fecha_caducidad
                    <input type="text" class="form-control" v-model="articulos[0].fecha_caducidad">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarArticulo(articulos[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useArticulo } from '../controladores/useArticulo';
const { traeArticuloId, actualizarArticulo, mensaje, articulos } = useArticulo()
//Traer los datos del registro de cada id
let idArticulo = 0
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
                routeRedirect.push('/articulos'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idArticulo = Number(route.params.id_articulo);
    await traeArticuloId(Number(idArticulo))
})
</script>

<style scoped>
    
</style>