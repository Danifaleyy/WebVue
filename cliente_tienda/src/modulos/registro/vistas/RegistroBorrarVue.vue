<template>
    <div class="container mt-5" v-if="registros[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Registro</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    id_registro
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="registros[0].id_registro" disabled>
                </div>
                <div class="mb-3">
                    id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="registros[0].id" disabled>
                </div>
                <div class="mb-3">
                    fecha
                    <input type="date" class="form-control" v-model="registros[0].fecha" disabled>
                </div>
                <div class="mb-3">
                    hora
                    <input type="text" class="form-control" v-model="registros[0].hora" disabled>
                </div>
                <div class="mb-3">
                    movimiento
                    <input type="text" class="form-control" v-model="registros[0].movimiento" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarRegistro(registros[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRegistro } from '../controladores/useRegistro';
const { traeRegistroId, borrarRegistro, mensaje, registros } = useRegistro()
//Traer los datos del registro de cada id
let idRegistro = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/registro')
    }
)

onMounted(async() => {
    idRegistro = Number(route.params.id_registro);
    await traeRegistroId(Number(idRegistro))
})
</script>

<style scoped></style>