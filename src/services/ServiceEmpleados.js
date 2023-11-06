import Global from './../Global';
import axios from 'axios';

export default class ServiceEmpleados{
    getEmpleados(){
        return new Promise(function(resolve){
            let request = "api/empleados";
            let url = Global.URL_ApiEmpleados + request;
            let empleados = [];
            axios.get(url).then(response=>{
                empleados = response.data;
                resolve(empleados)
            })
            return empleados;
        })
    }
}