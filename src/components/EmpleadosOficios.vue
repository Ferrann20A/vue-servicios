<template>
    <div class="container">
        <h1>Empleados Oficios</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="e in empleados" :key="e">
                    <td>{{e.apellido}}</td>
                    <td>{{e.oficio}}</td>
                    <td>{{e.salario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import Global from './../Global'
    export default{
        watch:{
            '$route.params.oficio'(nextVal,oldVal){
                if(nextVal != oldVal){
                    this.loadEmpleados();
                }
            }
        },
        name:"EmpleadosOficios",
        data(){
            return{
                empleados:[]
            }
        },
        methods:{
            loadEmpleados(){
                let oficio = this.$route.params.oficio;
                let request = `api/empleados/empleadosoficio/${oficio}`;
                let url = Global.URL_ApiEmpleados + request;
                axios.get(url).then(response=>{
                    this.empleados = response.data
                })
            }
        },
        mounted(){
            this.loadEmpleados();
        }
    }
</script>

<style>

</style>