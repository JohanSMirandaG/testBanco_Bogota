import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgFor,NgIf} from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './task-delete.component.html',
  imports: [NgFor,NgIf],
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent {
  tasks: { id: number; title: string; description: string }[] = [];

  constructor(private router: Router, private http: HttpClient) {
    const state = this.router.getCurrentNavigation()?.extras.state as { tasks: { id: number; title: string; description: string }[] };
    if (state && state.tasks) {
      this.tasks = state.tasks;
    } else {
      console.warn('No tasks were passed to TaskListComponent.');
    }
  }
  goBack() {
    this.router.navigate(['/']);  // Redirige a la página principal
  }
  // Eliminar tarea por ID
  deleteTask(taskId: number) {

    this.http.delete('http://localhost:8080/tasks/'+taskId)
      .subscribe(() =>
        this.router.navigate(['/'])
      )
  }
}
