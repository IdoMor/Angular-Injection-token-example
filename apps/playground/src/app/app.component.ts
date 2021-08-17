import { Component } from '@angular/core';
import {ServiceAService} from '../../../../libs/lib-a/src/lib/services/service-a.service';

@Component({
  selector: 'injection-token-exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: ServiceAService) {
    service.doSomething();
  }

  title = 'playground';
}
