import { Injectable } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedRouteStub {
  private subject = new BehaviorSubject(convertToParamMap({}));

  paramMap = this.subject.asObservable();
}
