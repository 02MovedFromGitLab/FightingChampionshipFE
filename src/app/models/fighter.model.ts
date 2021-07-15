import {WeightClass} from './weight-class.model';

export class Fighter {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  dob: Date;
  birthPlace: string;
  currentGym: string;
  stance: string;
  weight: number;
  height: number;
  reach: number;
  weightClass: WeightClass;
}
