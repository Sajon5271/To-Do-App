import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';

const routes: Routes = [
  { path: '', component: MainContainerComponent },
  { path: 'allTasks', component: MainContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
