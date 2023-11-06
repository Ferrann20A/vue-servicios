<template>
    <div>
        <h1>Api Coches Component</h1>
        <div v-for="c in coches" :key="c">
            <h1 style="color:blue">
                {{c.marca}}, {{c.modelo}}
            </h1>
            <h2 style="color:red">
                {{c.conductor}}
            </h2>
            <img :src="c.imagen" width="300" height="150"/>
        </div>
    </div>
</template>

<script>
    import ServiceCoches from '../services/ServiceCoches'
    const service = new ServiceCoches();
    export default{
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        methods:{

        },
        mounted(){
            service.getCoches().then(result =>{
                this.coches = result;
            })
        }
    }
</script>

<style>

</style>