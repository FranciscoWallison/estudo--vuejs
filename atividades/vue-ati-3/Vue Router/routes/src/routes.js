import HomeComponent from './components/HomeComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import TasksComponent from './components/TasksComponent.vue'

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductsComponent},
    {path: '/tarefas', component: TasksComponent}
]

export default routes;