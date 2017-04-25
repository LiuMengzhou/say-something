import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTooltipModule } from "@angular/material";

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {EssaysComponent} from "./essays/essays.component";
import {CategoryComponent} from "./category/category.component";
import {AboutComponent} from "./about/about.component";
import {AppRoutingModule} from "./router/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EssaysComponent,
    CategoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
