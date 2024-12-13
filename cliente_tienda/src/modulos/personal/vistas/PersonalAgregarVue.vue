<!--Boton para agregar un nuevo registro en Personal-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Personal</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="PersonalSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="nombre" type="text" class="form-control" v-model="personal.nombre"/>
                        <ErrorMessage name="nombre" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Direccion
                        <Field name="direccion" input type="text" class="form-control" v-model="personal.direccion"/>
                        <ErrorMessage name="direccion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Telefono
                        <Field name="telefono" input type="text" class="form-control" v-model="personal.telefono"/>
                        <ErrorMessage name="telefono" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Estatus
                        <Field name="estatus" input type="text" class="form-control" v-model="personal.estatus"/>
                        <ErrorMessage name="estatus" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <!--<Field name="nombre" button class="btn btn-primary" @click="agregarPersonal(personal)">Agregar</Field>-->
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PersonalAgregar } from '../interfaces/personal-interfaces';
import { usePersonal } from '../controladores/usePersonal';
const { agregarPersonal, mensaje } = usePersonal()
import { PersonalSchema } from '../schemas/PersonalSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';


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
                routeRedirect.push('/personal'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let personal = ref<PersonalAgregar>({
        nombre: '',
        direccion: '',
        telefono: '',
        estatus: 0,
    })

    const onTodoBien = async () => {
        await agregarPersonal(personal.value);
    }
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>