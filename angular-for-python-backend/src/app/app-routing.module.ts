import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { ElgetComponent } from './elget/elget.component';
import { ElpostComponent } from './elpost/elpost.component';
import { HomeComponent } from './home/home.component';
import { StrapiComponent } from './strapi/strapi.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'elget',component:ElgetComponent},
  {path:'elpost',component:ElpostComponent},
  {path: 'update/:id',component:UpdateComponent},
    {path: 'delete/:id',component:DeleteComponent},
  {path: 'strapi',component:StrapiComponent},

  {path: 'home',component:HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
