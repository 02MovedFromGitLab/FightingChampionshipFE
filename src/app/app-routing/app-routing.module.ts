import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {FighterListComponent} from '../components/fighter-list/fighter-list.component';
import {VenuesComponent} from '../components/venues/venues.component';
import {ResultsComponent} from '../components/results/results.component';
import {FighterDetailComponent} from '../components/fighter-detail/fighter-detail.component';
import {FighterFormComponent} from '../components/fighter-form/fighter-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'fighter', component: FighterListComponent},
  {path: 'fighter/:id', component: FighterDetailComponent},
  {path: 'venues', component: VenuesComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'fighters/new', component: FighterFormComponent}
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
