import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SpinnerLoadingComponent } from '../tools/spinner-loading/spinner-loading.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-detalle-alumno',
  standalone: true,
  imports: [
    CardModule,
    SpinnerLoadingComponent,
    FloatLabelModule,
    FormsModule,
    InputTextModule
  ],
  templateUrl: './detalle-alumno.component.html',
  styleUrl: './detalle-alumno.component.css'
})
export class DetalleAlumnoComponent implements OnInit{
  loading = false;
  alumno : Alumno;
  submitDisable = false;

  constructor(
    private alumnoService : AlumnoService,
    private activeRouter : ActivatedRoute,
    private router : Router,
    private messageService : MessageService
  ){
    this.alumno = new Alumno(); 
  }
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if(id){
          this.loading = true;
          this.alumnoService.getAlumno(Number(id)).subscribe({
            next: (data)=> this.alumno = data,
            error: (error) => console.log(error),
            complete: () => this.loading = false
          })
        }
      },
      error : () => this.router.navigate(['/alumnos']),
      complete : () =>{
        this.loading = false;
      }
    })
  }

  editarAlumno() {
    this.submitDisable = true;
    this.loading = true;
    this.alumnoService.updateAlumno(this.alumno.id,this.alumno).subscribe({
      next: ()  => this.router.navigate(['/alumnos']),
      error: (err) =>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error inesperado' });
      },
      complete : () => {
        this.loading = false;
        this.submitDisable = false
      }
    })
  }



}
