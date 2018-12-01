import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'add', component: AddComponent},
      {path: 'update', component: UpdateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
