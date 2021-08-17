import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceAService} from './services/service-a.service';
import {MEANINGFUL_CONFIG_INJECTION_TOKEN} from '../../../core/src/lib/meaningful-config-injection-token';
import {LIB_A_CONFIG_INJECTION_TOKEN} from './lib-a-injection-token';
import {LibAConfig} from './models/lib-a-config';

@NgModule({
  imports: [CommonModule],
  providers: [
    ServiceAService,
    {
      provide: MEANINGFUL_CONFIG_INJECTION_TOKEN,
      useFactory: (libAConfig: LibAConfig) => {return libAConfig.meaningfulServiceConfig},
      deps: [LIB_A_CONFIG_INJECTION_TOKEN]
    }
  ]
})
export class LibAModule {}
