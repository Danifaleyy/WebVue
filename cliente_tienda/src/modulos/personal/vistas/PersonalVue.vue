<template>
    <section>
        <div class="botones">
            <!--Boton para agregar un nuevo registro-->
            <RouterLink :to = "{path: '/personal/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <button @click.prevent="personalPDF" class="btn btn-sm btn-outline-primary" v-if="personal.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm btn-outline-primary" v-if="personal.length > 0">
                <download-excel :data="personal" type="xlsx" name="personal.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>
    <table class="table table-striped table-bordered" id="tablaPersonal">
        <caption><h3>Personal</h3></caption>
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Estatus</th>
                <th>Botones de Accion</th>
            </tr>
        </thead>
        <!--Debemos traer los datos de la base de datos, en api, se instala: npm install axios -save-->
        <tbody>
            <!--Cuando no trae datos-->
            <tr v-if="personal.length == 0">
                <td class="centrado" colspan="6">Sin personal registrado</td>
            </tr>
            <!--Ciclo for para que muestere tantos como sean-->
            <tr v-else v-for="(persona,index) in personal" :key="index">
                <td>{{ persona.id }}</td>
                <td>{{ persona.nombre }}</td>
                <td>{{ persona.direccion }}</td>
                <td>{{ persona.telefono }}</td>
                <td>{{ persona.estatus }}</td>
                <!--Botones para modificar y eliminar-->
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <!--Boton modificar-->
                            <RouterLink class="nav-link item" :to = "{path: '/personal/'+ persona.id + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <!--Boton eliminar-->
                            <RouterLink class="nav-link item" :to = "{path: '/personal/'+ persona.id + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
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
    import {usePersonal} from '../controladores/usePersonal.ts'
    const { traePersonal,personal } = usePersonal()
    //Cuando la pagina es visible y esta cargada
    onMounted(async () => {
        await traePersonal()
    })

    const personalPDF = async () => {
    const pagina = document.getElementById('tablaPersonal');
    if (!pagina) {
        console.error("Elemento 'tablaPersonal' no encontrado.");
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
        output: 'personal.pdf',
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