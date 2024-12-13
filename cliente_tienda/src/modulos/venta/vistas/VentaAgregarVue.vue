<!--Boton para agregar un nuevo registro en Personal-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Venta</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="VentaSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        id_articulo
                        <Field name="id_articulo" type="number" class="form-control" v-model="venta.id_articulo"/>
                        <ErrorMessage name="id_articulo" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        id
                        <Field name="id" type="number" class="form-control" v-model="venta.id"/>
                        <ErrorMessage name="id" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        cantidad
                        <Field name="cantidad" type="number" class="form-control" v-model="venta.cantidad"/>
                        <ErrorMessage name="cantidad" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        precio
                        <Field name="precio" type="number" class="form-control" v-model="venta.precio"/>
                        <ErrorMessage name="precio" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        iva
                        <Field name="iva" type="number" class="form-control" v-model="venta.iva"/>
                        <ErrorMessage name="iva" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        subtotal
                        <Field name="subtotal" type="number" class="form-control" v-model="venta.subtotal"/>
                        <ErrorMessage name="subtotal" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        total
                        <Field name="total" type="number" class="form-control" v-model="venta.total"/>
                        <ErrorMessage name="total" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        fecha_venta
                        <Field name="fecha_venta" type="date" class="form-control" v-model="venta.fecha_venta"/>
                        <ErrorMessage name="fecha_venta" class="errorValidacion"/>
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
import type { VentaAgregar } from '../interfaces/venta-interfaces';
import { useVenta } from '../controladores/useVenta';
const { agregarVenta, mensaje } = useVenta()
import { VentaSchema } from '../schemas/VentaSchema';
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
                routeRedirect.push('/venta'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let venta = ref<VentaAgregar>({
        id_articulo: 0,      
        id: 0,                
        cantidad: 0,          
        precio: 0,           
        iva: 0,               
        subtotal: 0,          
        total: 0,             
        fecha_venta: new Date()
    })

    const onTodoBien = async () => {
        await agregarVenta(venta.value);
    }
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>