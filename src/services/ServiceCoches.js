import Global from "./../Global";
import axios from 'axios';

export default class ServiceCoches {
    getCoches() {
        return new Promise(function (resolve) {
            let request = "webresources/coches"
            let url = Global.URL_ApiCoches + request;
            let coches = [];
            axios.get(url).then(response => {
                coches = response.data
                resolve(coches);
            })
            return coches;
        })
    }
}