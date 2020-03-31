import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './containers/todos/todos.component';
import {EditComponent} from './containers/edit/edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'todo-list'},
  {path: 'todo-list',  component: TodosComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
