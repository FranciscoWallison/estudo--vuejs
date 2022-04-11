import Register from './components/register/Register.vue';
import Home from './components/home/Home.vue'


export const routes = [
    { path: '', component: Home, title: 'Home' },
    { path: '/cadastro', component: Register, title: 'Cadastro' }
];