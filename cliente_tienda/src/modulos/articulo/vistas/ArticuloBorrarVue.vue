<template>
    <div class="container mt-5" v-if="articulos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Articulo</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    id_articulo
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="articulos[0].id_articulo" disabled>
                </div>
                <div class="mb-3">
                    descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="articulos[0].descripcion" disabled>
                </div>
                <div class="mb-3">
                    precio
                    <input type="text" class="form-control" v-model="articulos[0].precio" disabled>
                </div>
                <div class="mb-3">
                    cantidad_almacen
                    <input type="text" class="form-control" v-model="articulos[0].cantidad_almacen" disabled>
                </div>
                <div class="mb-3">
                    fecha_caducidad
                    <input type="text" class="form-control" v-model="articulos[0].fecha_caducidad" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarArticulo(articulos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useArticulo } from '../controladores/useArticulo';
const { traeArticuloId, borrarArticulo, mensaje, articulos } = useArticulo()
//Traer los datos del registro de cada id
let idArticulo = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/articulos')
    }
)

onMounted(async() => {
    idArticulo = Number(route.params.id_articulo);
    await traeArticuloId(Number(idArticulo))
})
</script>

<style scoped></style>