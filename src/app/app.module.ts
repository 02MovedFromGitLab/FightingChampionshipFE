import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FighterListComponent } from './components/fighter-list/fighter-list.component';
import { FighterFormComponent } from './components/fighter-form/fighter-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { FighterDetailComponent } from './components/fighter-detail/fighter-detail.component';
import { ResultsComponent } from './components/results/results.component';
import { VenuesComponent } from './components/venues/venues.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FighterListComponent,
    FighterFormComponent,
    NavbarComponent,
    FighterDetailComponent,
    ResultsComponent,
    VenuesComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
