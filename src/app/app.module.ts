import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,Http} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule,Router, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu/menu.component';
import{ SharedService } from './service/shared.service';

const routes: Routes = [
    {path: 'add', component: AddComponent},
    {path: 'update', component: UpdateComponent},
    {path: 'view', component: ViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
