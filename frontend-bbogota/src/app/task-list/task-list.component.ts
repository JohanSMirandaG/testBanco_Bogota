import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgFor,NgIf} from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './task-list.component.html',
  imports: [NgFor,NgIf],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: { id: number; title: string; description: string }[] = [];

  constructor(private router: Router) {
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
}
