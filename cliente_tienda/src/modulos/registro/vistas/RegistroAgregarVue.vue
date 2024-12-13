<!--Boton para agregar un nuevo registro en Personal-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Registro</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="RegistroSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        id
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="id" type="number" class="form-control" v-model="registro.id"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        fecha
                        <Field name="fecha" input type="date" class="form-control" v-model="registro.fecha"/>
                        <ErrorMessage name="fecha" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        hora
                        <Field name="hora" input type="text" class="form-control" v-model="registro.hora"/>
                        <ErrorMessage name="hora" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        movimiento
                        <Field name="movimiento" input type="text" class="form-control" v-model="registro.movimiento"/>
                        <ErrorMessage name="movimiento" class="errorValidacion"/>
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
import type { RegistroAgregar } from '../interfaces/registro-interfaces';
import { useRegistro } from '../controladores/useRegistro';
const { agregarRegistro, mensaje } = useRegistro()
import { RegistroSchema } from '../schemas/RegistroSchema';
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
                routeRedirect.push('/registro'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let registro = ref<RegistroAgregar>({
        id: 0,
        fecha: new Date(),
        hora: '',
        movimiento: 'entrada',
    })

    const onTodoBien = async () => {
        await agregarRegistro(registro.value);
    }
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>