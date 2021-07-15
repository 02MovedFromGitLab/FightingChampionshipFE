import {Fighter} from './fighter.model';
import {WeightClass} from './weight-class.model';


export class Fight {
  isFinished: boolean;
  finishedInRound: number;
  finishTime: Date;
  finishMethod: string;
  redFighter: Fighter;
  winner: Fighter;
  blueFighter: Fighter;
  weightClass: WeightClass;
}
