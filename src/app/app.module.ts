import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FighterListComponent } from './components/fighter-list/fighter-list.component';
import { FighterFormComponent } from './components/fighter-form/fighter-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterListComponent,
    FighterFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
