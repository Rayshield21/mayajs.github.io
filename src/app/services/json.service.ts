import { Injectable } from '@angular/core';
import * as data from '../../lang/fil';
@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor() { }

  get data(){
    return data
  }
}
