import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class ScreenChange {

  screenChange$: Subject<any> = new Subject<any>();

  makeScreenChange(val) {
    this.screenChange$.next(val);
  }

}
