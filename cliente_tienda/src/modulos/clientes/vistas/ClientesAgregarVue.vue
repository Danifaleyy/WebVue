<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Cliente</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <Form :validation-schema="ClienteSchema" @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre
                        <Field name="nombre" type="text" class="form-control" v-model="cliente.nombre" />
                        <ErrorMessage name="nombre" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Dirección
                        <Field name="direccion" type="text" class="form-control" v-model="cliente.direccion" />
                        <ErrorMessage name="direccion" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Teléfono
                        <Field name="telefono" type="text" class="form-control" v-model="cliente.telefono" />
                        <ErrorMessage name="telefono" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Correo Electrónico
                        <Field name="correo_electronico" type="text" class="form-control" v-model="cliente.correo_electronico" />
                        <ErrorMessage name="correo_electronico" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Ciudad
                        <Field name="ciudad" type="text" class="form-control" v-model="cliente.ciudad" />
                        <ErrorMessage name="ciudad" class="errorValidacion" />
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
import type { ClienteAgregar } from '../interfaces/clientes-interfaces';
import { useClientes } from '../controladores/useClientes';
const { agregarCliente, mensaje } = useClientes();
import { ClienteSchema } from '../schemas/ClientesSchema';
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
                routeRedirect.push('/clientes'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


let cliente = ref<ClienteAgregar>({
    nombre: '',
    direccion: '',
    telefono: '',
    correo_electronico: '',
    ciudad: ''
});

const onTodoBien = async () => {
        await agregarCliente(cliente.value);
    }

</script>

<style scoped>
.errorValidacion {
    color: red;
    font-weight: bold;
}
</style>
