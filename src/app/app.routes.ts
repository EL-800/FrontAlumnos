import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'alumnos/formulario', component: FormularioAlumnoComponent},
    { path: 'alumnos/:id', component : DetalleAlumnoComponent},    
];
