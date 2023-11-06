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
    import ServiceEmpleados from '../services/ServiceEmpleados';
    const service = new ServiceEmpleados();
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
                service.findEmpleado(this.idEmpleado).then(result=>{
                    this.empleado = result;
                })
            }
        },
        mounted(){
            service.getEmpleados().then(result=>{
                this.empleados = result;
            })
        }
    }
</script>

<style>

</style>