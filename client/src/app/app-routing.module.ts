import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContainerComponent } from './main-container/main-container.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'all-tasks', component: AllTasksComponent },
  { path: 'create-task', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
