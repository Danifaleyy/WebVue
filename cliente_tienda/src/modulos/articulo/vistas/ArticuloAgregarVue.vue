<!--Boton para agregar un nuevo registro en Personal-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Articulo</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="ArticuloSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        descripcion
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="descripcion" type="text" class="form-control" v-model="articulo.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        precio
                        <Field name="precio" input type="number" class="form-control" v-model="articulo.precio"/>
                        <ErrorMessage name="precio" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        cantidad_almacen
                        <Field name="cantidad_almacen" input type="number" class="form-control" v-model="articulo.cantidad_almacen"/>
                        <ErrorMessage name="cantidad_almacen" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        fecha_caducidad
                        <Field name="fecha_caducidad" input type="date" class="form-control" v-model="articulo.fecha_caducidad"/>
                        <ErrorMessage name="fecha_caducidad" class="errorValidacion"/>
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
import type { ArticuloAgregar } from '../interfaces/articulo-interfaces';
import { useArticulo } from '../controladores/useArticulo';
const { agregarArticulo, mensaje } = useArticulo()
import { ArticuloSchema } from '../schemas/ArticuloSchema';
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
                routeRedirect.push('/articulos'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let articulo = ref<ArticuloAgregar>({
        descripcion: '',
        precio: 0,
        cantidad_almacen: 0,
        fecha_caducidad: new Date(),
    })

    const onTodoBien = async () => {
        await agregarArticulo(articulo.value);
    }
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>