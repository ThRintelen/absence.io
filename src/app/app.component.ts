import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbsenceService } from './absence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly service: AbsenceService) {}

  ngOnInit() {
    this.service.getAbsences().subscribe(console.log);
  }
}
