import { Component, OnInit } from '@angular/core';
import {FighterService} from '../../services/fighter.service';
import {Fighter} from '../../models/fighter.model';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.css']
})

export class FighterListComponent implements OnInit {
 fighters: Fighter[] = [];

  constructor(private fighterService: FighterService) { }

  ngOnInit(): void {
    this.fighterService.getFighters().subscribe(
      fighters => {
        console.log('response before:' + fighters);
        this.fighters = fighters;
        console.log('response after' + fighters);
      }
    );
  }

}

