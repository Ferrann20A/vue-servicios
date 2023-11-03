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
    import axios from 'axios';
    //Importar Global.js
    //Si necesito varaibles que sea declaradas para todos los metodo que tengamos
    //en el compoenent lo haremos aqui
    let URLApiCoches = "https://apicochespaco.azurewebsites.net/";
    export default{
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        methods:{
            loadCoches(){
                let request = "webresources/coches";
                //Las variables por encima de 'export default' no utilizan 'this'
                let url = URLApiCoches + request;
                axios.get(url).then(response=>{
                    this.coches = response.data;
                })
            }
        },
        mounted(){
            this.loadCoches();
        }
    }
</script>

<style>

</style>