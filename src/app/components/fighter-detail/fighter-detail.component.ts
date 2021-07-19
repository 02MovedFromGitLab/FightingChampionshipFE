import { Component, OnInit } from '@angular/core';
import {FighterService} from '../../services/fighter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Fighter} from '../../models/fighter.model';
import {FightRecord} from '../../models/fight-record.model';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {

fighter: Fighter = new Fighter();
fighterRecord: FightRecord = new FightRecord();

  constructor(private fighterService: FighterService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idIsPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (idIsPresent) {
      const id = + this.activatedRoute.snapshot.paramMap.get('id');
      this.fighterService.getFighter(id).subscribe(
        dataSingleFighter => this.fighter = dataSingleFighter
      );
      this.fighterService.getFighterRecord(id).subscribe(
        dataSingleRecord => this.fighterRecord = dataSingleRecord
      );
    }
  }
  onClickDelete(): void {
    if (confirm('Only fighters without a fight history can be deleted, are you sure? NOTE: fighter record will be checked in the future')) {
      this.fighterService.deleteFighter(this.fighter.id).subscribe(
        data => {
          console.log('deleted response', data);
          confirm('deleted response, happypath' + data);
          this.router.navigateByUrl('fighter');
        }
      );
      this.router.navigateByUrl('fighter');
    }
  }


}
