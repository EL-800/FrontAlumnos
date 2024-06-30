import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Alumno } from '../models/alumno.model';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private URL_ALUMNO = environment.API_URL + '/alumno'

  constructor(private http : HttpClient) { }

  getAlumnos() :Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.URL_ALUMNO,httpOptions)
  }

  getAlumno(id : number): Observable<Alumno>{
    const url = `${this.URL_ALUMNO}/${id}`;
    return this.http.get<Alumno>(url,httpOptions);
  }

  addAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.URL_ALUMNO,alumno,httpOptions);
  }

  updateAlumno(id : number, alumno: Alumno): Observable<Alumno>{
    const url = `${this.URL_ALUMNO}/${id}`;
    return this.http.put<Alumno>(url,alumno ,httpOptions);
  }

  deleteAlumno(id : number): Observable<Alumno>{
    const url = `${this.URL_ALUMNO}/${id}`;
    return this.http.delete<Alumno>(url,httpOptions);
  }

}
