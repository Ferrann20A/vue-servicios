import {createRouter, createWebHistory} from 'vue-router';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import CochesComponent from './components/CochesComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/coches", component: CochesComponent
    },
    {
        path:"/detallesempleado", component: EmpleadosDetalle
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;