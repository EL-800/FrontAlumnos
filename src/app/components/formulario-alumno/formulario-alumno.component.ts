import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Alumno } from '../../models/alumno.model';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';
import { SpinnerLoadingComponent } from '../tools/spinner-loading/spinner-loading.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-formulario-alumno',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    SpinnerLoadingComponent,
    ToastModule
  ],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {
  alumno : Alumno;
  loading = false;
  submitDisable = false;
  constructor(private alumnoService : AlumnoService, private router : Router, private messageService: MessageService){
    this.alumno = new Alumno();
  }
  
  registrarAlumno(){
    if(!this.alumno.nombre || !this.alumno.materno || !this.alumno.paterno || !this.alumno.email){
      this.messageService.add({ severity: 'info', summary: 'Datos', detail: 'Completar los datos correctamente' });
      return;
    }

    this.loading = true;
    this.submitDisable = true;
    this.alumnoService.addAlumno(this.alumno).subscribe({
      next: () => this.router.navigate(['/alumnos']),
      error: (err) =>{
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error inesperado' });
      },
      complete: () => {
        this.loading = false
        this.submitDisable = false;
      }
    });
  }
}
