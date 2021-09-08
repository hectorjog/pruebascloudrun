import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElgetComponent } from './elget/elget.component';
import { ElpostComponent } from './elpost/elpost.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { StrapiComponent } from './strapi/strapi.component';


@NgModule({
  declarations: [
    AppComponent,
    ElgetComponent,
    ElpostComponent,
    UpdateComponent,
    HomeComponent,
    StrapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
   CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
