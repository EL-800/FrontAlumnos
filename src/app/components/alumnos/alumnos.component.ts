import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { TableModule } from 'primeng/table';
import { SpinnerLoadingComponent } from '../tools/spinner-loading/spinner-loading.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    SpinnerLoadingComponent,
    MessagesModule,
    RouterModule,
    ButtonModule,
  ],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{

  alumnos : Alumno[] = [];
  loading : boolean = true;
  constructor(private alumnoService : AlumnoService,
     private messageService : MessageService,
     private router : Router
    ){}

  ngOnInit(): void {
    this.loading = true;
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => {
        console.error(err);
        this.messageService.add({severity:'error',detail:'Ha Ocurrido un error inesperado al consultar los alumnos'})
      },
    })
    this.loading = false
  }

  redirectoToFormAlumno(){
    this.router.navigate(['/alumnos/formulario']);
  }
  detalleAlumno(id: number){
    this.router.navigate(['/alumnos/',id])
  }
  borrarAlumno(id : number){
    this.loading = true;
    this.alumnoService.deleteAlumno(id).subscribe({
      error: (err) => {
        this.loading = false;
        console.error(err);
        this.messageService.add({severity:'error',detail:'Ha Ocurrido un error inesperado al borrar el registro'});
      },
      complete: () => {this.loading = false},
    })
  }
}
