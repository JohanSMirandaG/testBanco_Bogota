import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private http: HttpClient) { }

  goToTasks() {
    this.http.get<{ tasks: any[] }>('http://localhost:8080/tasks').pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return of({ tasks: [] }); // Retorna un array vacío en caso de error
      })
    ).subscribe(response => {
      if (response && response.tasks) {
        this.router.navigate(['/tasks'], { state: { tasks: response.tasks } });
      }
    });
  }

  goToDeleteTask() {
    this.http.get<{ tasks: any[] }>('http://localhost:8080/tasks').pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return of({ tasks: [] }); // Retorna un array vacío en caso de error
      })
    ).subscribe(response => {
      if (response && response.tasks) {
        this.router.navigate(['/delete-task'], { state: { tasks: response.tasks } });
      }
    });
  }

  goToAddTask() {
    this.router.navigate(['/add-task']);
  }
}
