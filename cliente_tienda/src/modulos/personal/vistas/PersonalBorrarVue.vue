<template>
    <div class="container mt-5" v-if="personal[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Personal</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="personal[0].id" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="personal[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    Direccion
                    <input type="text" class="form-control" v-model="personal[0].direccion" disabled>
                </div>
                <div class="mb-3">
                    Telefono
                    <input type="text" class="form-control" v-model="personal[0].telefono" disabled>
                </div>
                <div class="mb-3">
                    Estatus
                    <input type="text" class="form-control" v-model="personal[0].estatus" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarPersonal(personal[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePersonal } from '../controladores/usePersonal';
const { traePersonalId, borrarPersonal, mensaje, personal } = usePersonal()
//Traer los datos del registro de cada id
let idPersona = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/personal')
    }
)

onMounted(async() => {
    idPersona = Number(route.params.id);
    await traePersonalId(Number(idPersona))
})
</script>

<style scoped></style>