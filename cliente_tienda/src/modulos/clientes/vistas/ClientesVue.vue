<template>
    <section>
        <div class="botones">
            <RouterLink :to="{ path: '/clientes/agregar' }">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <button @click.prevent="clientePDF" class="btn btn-sm btn-outline-primary" v-if="clientes.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm btn-outline-primary" v-if="clientes.length > 0">
                <download-excel :data="clientes" type="xlsx" name="clientes.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>
        <table class="table table-striped table-bordered" id="tablaClientes">
            <caption><h3>Cliente</h3></caption>
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Correo Electrónico</th>
                    <th>Ciudad</th>
                    <th>Botones de Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="clientes.length == 0">
                    <td colspan="7">Sin clientes registrados</td>
                </tr>
                <tr v-else v-for="(cliente, index) in clientes" :key="index">
                    <td>{{ cliente.id }}</td>
                    <td>{{ cliente.nombre }}</td>
                    <td>{{ cliente.direccion }}</td>
                    <td>{{ cliente.telefono }}</td>
                    <td>{{ cliente.correo_electronico }}</td>
                    <td>{{ cliente.ciudad }}</td>
                    <!--Botones para modificar y eliminar-->
                    <td class="centrado">
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-sm btn-outline-primary">
                                <!--Boton modificar-->
                                <RouterLink class="nav-link item" :to = "{path: '/clientes/'+ cliente.id + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-danger">
                                <!--Boton eliminar-->
                                <RouterLink class="nav-link item" :to = "{path: '/clientes/'+ cliente.id + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
</template>


<script setup lang="ts">
    // Importar para imprimir página en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue';
    import { useClientes } from '../controladores/useClientes';

    const { traeCliente, clientes } = useClientes();

    // Cuando la página es visible y está cargada
    onMounted(async () => {
        await traeCliente();  // Llamar a la función que obtiene los datos
    });

    const clientePDF = async () => {
        const pagina = document.getElementById('tablaClientes'); // Asegúrate que el ID sea correcto
        if (!pagina) {
            console.error("Elemento 'tablaClientes' no encontrado.");
            return;
        }

        await html2PDF(pagina, {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: 'clientes.pdf',
        });
    };
</script>


<style scoped>
    .section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 20px;
    }
    .centrado {
        text-align: center;
    }
    caption{
        caption-side: top;
        text-align: center;
        padding: 10px;
        font-weight: bold;
    }
    .thead-dark{
        background-color: #081c15;
        color: white;
    }
    .table-bordered th,
    .table-bordered td {
        border: 1px solid #081c15;
        padding: 8px;
        text-align: center;
        font-weight: bold;
    }
    .botones {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        margin-left: 20px;
        margin-top: 20px;
    }
    h3{
        color: #081c15;
        font-weight: bold;
    }
</style>
