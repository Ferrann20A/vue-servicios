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
    import ServiceEmpleados from './../services/ServiceEmpleados';
    const service = new ServiceEmpleados();
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
                service.findEmpleadosByOficio(oficio).then(result=>{
                    this.empleados = result;
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