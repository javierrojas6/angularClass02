import {RouterModule, Routes} from '@angular/router'; //importar librerias de las rutas

//importar componentes que creamos para enrutarlos
import {HomeComponent} from './pages/home/home.component'; 
import {CategoriaComponent} from './pages/categoria/categoria.component'; 

//creación de constante tipo arreglo[] con 2 objetos llamado rutas
const routerM:Routes = [//crear condicionales 
    {path:'', component:HomeComponent},
    {path:'categoria', component:CategoriaComponent}
];
export const appRouter = RouterModule.forRoot(routerM);