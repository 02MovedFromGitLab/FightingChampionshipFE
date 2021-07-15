import { Component, OnInit } from '@angular/core';
import {Fighter} from '../../models/fighter.model';
import {WeightClass} from '../../models/weight-class.model';
import {FighterService} from '../../services/fighter.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
  styleUrls: ['./fighter-form.component.css']
})
export class FighterFormComponent implements OnInit {

  fighter: Fighter = new Fighter();
  weightClass: WeightClass = new WeightClass();

  constructor(private fighterService: FighterService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveFighter(): void {
    this.fighterService.saveFighter(this.fighter).subscribe(
      data => {
        console.log('response ', data);
        this.router.navigateByUrl('/fighter');
      }
    );
  }



}
