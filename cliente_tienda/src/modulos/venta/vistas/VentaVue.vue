<template>
    <section>
        <div class="botones">
            <!--Boton para agregar un nuevo registro-->
            <RouterLink :to = "{path: '/venta/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <button @click.prevent="ventaPDF" class="btn btn-sm btn-outline-primary" v-if="ventas.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm btn-outline-primary" v-if="ventas.length > 0">
                <download-excel :data="ventas" type="xlsx" name="venta.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>
    <table class="table table-striped table-bordered" id="tablaVenta">
        <caption><h3>Venta</h3></caption>
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>ID Articulo</th>
                <th>ID Cliente</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>IVA</th>
                <th>Subtotal</th>
                <th>Total</th>
                <th>Fecha Venta</th>
                <th>Botones de Accion</th>
            </tr>
        </thead>
        <!--Debemos traer los datos de la base de datos, en api, se instala: npm install axios -save-->
        <tbody>
            <!--Cuando no trae datos-->
            <tr v-if="ventas.length == 0">
                <td class="centrado" colspan="10">Sin venta registrado</td>
            </tr>
            <!--Ciclo for para que muestere tantos como sean-->
            <tr v-else v-for="(venta,index) in ventas" :key="index">
                <td>{{ venta.id_venta }}</td>
                <td>{{ venta.id_articulo}}</td>
                <td>{{ venta.id }}</td>
                <td>{{ venta.cantidad }}</td>
                <td>{{ venta.precio }}</td>
                <td>{{ venta.iva }}</td>
                <td>{{ venta.subtotal }}</td>
                <td>{{ venta.total }}</td>
                <td>{{ venta.fecha_venta }}</td>
                <!--Botones para modificar y eliminar-->
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <!--Boton modificar-->
                            <RouterLink class="nav-link item" :to = "{path: '/venta/'+ venta.id_venta + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <!--Boton eliminar-->
                            <RouterLink class="nav-link item" :to = "{path: '/venta/'+ venta.id_venta + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<script setup lang="ts">
    //Importar para imprimir pagina en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue'
    import {useVenta} from '../controladores/useVenta'
    const { traeVenta, ventas} = useVenta();
    //Cuando la pagina es visible y esta cargada
    onMounted(async () => {
        await traeVenta();
    });

    const ventaPDF = async () => {
    const pagina = document.getElementById('tablaVenta');
    if (!pagina) {
        console.error("Elemento 'tablaVenta' no encontrado.");
        return;
    }

    await html2PDF(pagina, {
        jsPDF: {
            // Tamaño de hoja
            format: 'a4',
        },
        // Definimos de qué tipo son las imágenes
        imageType: 'image/jpeg',
        // Nombre del archivo de salida
        output: './venta.pdf',
    });
};

    //load <----- Carga en memoria
    //mounted <----- Cargada y se ve en la pantala
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