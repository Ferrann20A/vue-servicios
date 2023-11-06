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

    findEmpleado(idEmpleado){
        return new Promise(function(resolve){
            let request = `api/empleados/${idEmpleado}`;
            let url = Global.URL_ApiEmpleados + request;
            let empleado = null;
            axios.get(url).then(response=>{
                empleado = response.data;
                resolve(empleado);
            })
            return empleado;
        })
    }

    findEmpleadosByOficio(oficio){
        return new Promise(function(resolve){
            let request = `api/empleados/empleadosoficio/${oficio}`;
            let url = Global.URL_ApiEmpleados + request;
            let empleados = [];
            axios.get(url).then(response=>{
                empleados = response.data;
                resolve(empleados)
            })
            return empleados;
        })
    }

    getOficios(){
        return new Promise(function(resolve){
            let request = "api/empleados/oficios";
            let url = Global.URL_ApiEmpleados + request;
            let oficios = [];
            axios.get(url).then(response=>{
                oficios = response.data;
                resolve(oficios);
            })
            return oficios;
        })
    }
}