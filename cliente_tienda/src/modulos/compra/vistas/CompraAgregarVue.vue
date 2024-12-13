<!--Boton para agregar un nuevo registro en Personal-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Compra</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="CompraSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        id_articulo
                        <Field name="id_articulo" type="number" class="form-control" v-model="compra.id_articulo"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        cantidad
                        <Field name="cantidad" type="number" class="form-control" v-model="compra.cantidad"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        precio
                        <Field name="precio" type="number" class="form-control" v-model="compra.precio"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        iva
                        <Field name="iva" type="number" class="form-control" v-model="compra.iva"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        subtotal
                        <Field name="subtotal" type="number" class="form-control" v-model="compra.subtotal"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        total
                        <Field name="total" type="number" class="form-control" v-model="compra.total"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        fecha_compra
                        <Field name="fecha_compra" type="date" class="form-control" v-model="compra.fecha_compra"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CompraAgregar } from '../interfaces/compra-interfaces';
import { useCompra } from '../controladores/useCompra';
const { agregarCompra, mensaje } = useCompra()
import { CompraSchema } from '../schemas/CompraSchema';
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
                routeRedirect.push('/compra'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let compra = ref<CompraAgregar>({
        id_articulo: 0,
        cantidad: 0,
        precio: 0,
        iva: 0,
        subtotal: 0,
        total: 0,
        fecha_compra: new Date()
    })

    const onTodoBien = async () => {
        await agregarCompra(compra.value);
    }
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>