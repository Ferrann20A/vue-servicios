<template>
    <div class="container">
        <h1>Empleados detalles</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>Seleccione un empleado</label>
            <select v-model="idEmpleado" class="form-control">
                <option v-for="e in empleados" :key="e" :value="e.idEmpleado">
                    {{e.apellido}}
                </option>
            </select>
            <button class="btn btn-info">
                Detalles
            </button>
        </form>
        <div v-if="empleado">
            <h2 style="color:blue">
                {{empleado.apellido}}
            </h2>
            <dl>
                <dt>Oficio</dt>
                <dd>{{empleado.oficio}}</dd>
                <dt>Salario</dt>
                <dd>{{empleado.salario}}</dd>
                <dt>Departamento</dt>
                <dd>{{empleado.departamento}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
    import Global from './../Global'
    import axios from 'axios'
    export default{
        name:"EmpleadosDetalle",
        data(){
            return{
                empleados:[],
                empleado:null,
                idEmpleado: 0
            }
        },
        methods:{
            buscarEmpleado(){
                let request = `api/empleados/${this.idEmpleado}`;
                let url = Global.URL_ApiEmpleados + request;
                axios.get(url).then(response=>{
                    this.empleado = response.data
                })
            },
        },
        mounted(){
            let request = "api/empleados";
            let url = Global.URL_ApiEmpleados + request;
            axios.get(url).then(response=>{
                this.empleados = response.data;
            })
        }
    }
</script>

<style>

</style>