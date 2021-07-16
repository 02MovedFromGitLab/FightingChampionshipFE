import { Component, OnInit } from '@angular/core';
import {FighterService} from '../../services/fighter.service';
import {Fighter} from '../../models/fighter.model';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.css']
})

export class FighterListComponent implements OnInit {

 fighters: Fighter[] = []; // Basic Fighter array remains
 filters = {
   keyword: ''
 }; // filters is a json object a keyword == '' to begin with.

  constructor(private fighterService: FighterService) { }

  ngOnInit(): void {
    // Provides our initial values for fighters === All of them
    this.fighterService.getFighters().subscribe(
      fightersData => {
        this.fighters = fightersData;
      }
    );
  }

  // Is called with every key stroke in our page input
  searchedFighters(): void {
    this.fighterService.getFighters().subscribe(
      fightersData => {
        this.fighters = this.filterFighters(fightersData);
      });
  }

  private filterFighters(fighters: Fighter[]): Fighter[] {
    return fighters.filter( f => {
      return f.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    });
  }

}

