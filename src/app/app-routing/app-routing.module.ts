import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {FighterListComponent} from '../components/fighter-list/fighter-list.component';
import {VenuesComponent} from '../components/venues/venues.component';
import {ResultsComponent} from '../components/results/results.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'fighters', component: FighterListComponent},
  {path: 'venues', component: VenuesComponent},
  {path: 'results', component: ResultsComponent}
];



@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
