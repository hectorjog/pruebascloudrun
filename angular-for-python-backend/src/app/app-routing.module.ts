import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElgetComponent } from './elget/elget.component';
import { ElpostComponent } from './elpost/elpost.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'elget',component:ElgetComponent},
  {path:'elpost',component:ElpostComponent},
  {path: 'update/:id',component:UpdateComponent},
  {path: 'home',component:HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
