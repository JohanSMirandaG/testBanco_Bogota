import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task = {
    title: '',
    description: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Hacer el POST a /tasks
    this.http.post('http://localhost:8080/tasks', this.task).pipe(
      catchError(error => {
        console.error('Error al agregar la tarea:', error);
        return of(null); // Manejo de errores
      })
    ).subscribe(response => {
      if (response) {
        console.log('Tarea agregada con éxito:', response);
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);  // Redirige a la página principal
  }
}
