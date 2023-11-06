<template>
    <div class="container">
        <h1>Home</h1>
        <h2>
            {{mensaje}}
        </h2>
    </div>
</template>

<script>
    import ServiceEjemplo from '../services/ServiceEjemplo'
    //Para utilizar un servicio debemos crear una constante que sea un objeto de la clase service
    const service = new ServiceEjemplo();

    export default{
        name:"HomeComponent",
        data(){
            return{
                mensaje:""
            }
        },
        mounted(){
            this.mensaje = service.getSaludo("Alumno");
        }
    }
</script>

<style>
    
</style>