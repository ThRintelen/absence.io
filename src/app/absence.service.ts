import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AbsenceService {
  private readonly uri = 'http://app.absence.io/api/';

  constructor(private readonly http: HttpClient) {}

  getAbsences(): Observable<any> {
    const body = {
      filter: {
        start: { $gte: '2020-12-01' },
      },
    };

    return this.http.post(`${this.uri}v2/absences`, body);
  }
}
