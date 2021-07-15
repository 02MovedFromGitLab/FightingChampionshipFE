import { Component, OnInit } from '@angular/core';
import {Fighter} from '../../models/fighter.model';
import {WeightClass} from '../../models/weight-class.model';
import {FighterService} from '../../services/fighter.service';
import {ActivatedRoute, Router} from '@angular/router';


/*
The original .js.
// tslint:disable-next-line:only-arrow-functions
(function(): void {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    // tslint:disable-next-line:only-arrow-functions
    .forEach(function(form): void {
      // tslint:disable-next-line:only-arrow-functions
      form.addEventListener('submit', function(event): any {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
})();*/

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
    const forms = document.querySelectorAll('.needs-validation');
    this.BootStrapBehaviour(forms);

    const idIsPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (idIsPresent) {
      const id = + this.activatedRoute.snapshot.paramMap.get('id');
      this.fighterService.getFighter(id).subscribe(
        dataSingleFighter => this.fighter = dataSingleFighter);
    }
  }

  saveFighter(): void {
    this.fighter.weightClass = this.weightClass;
    this.fighterService.saveFighter(this.fighter).subscribe(
      data => {
        console.log('response ', data);
        this.router.navigateByUrl('/fighter');
      }
    );
  }

  BootStrapBehaviour(forms): void {
    Array.prototype.slice.call(forms)
      // tslint:disable-next-line:only-arrow-functions
      .forEach(function(form): void {
        // tslint:disable-next-line:only-arrow-functions
        form.addEventListener('submit', function(event): any {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
  }

}
