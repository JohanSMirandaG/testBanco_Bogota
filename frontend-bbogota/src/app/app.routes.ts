import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TaskListComponent} from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import {TaskDeleteComponent} from './task-delete/task-delete.component';

// Usamos HomeComponent como la página de inicio
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'delete-task', component: TaskDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
