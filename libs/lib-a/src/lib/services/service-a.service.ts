import {Inject, Injectable} from '@angular/core';
import {MeaningfulService} from '../../../../core/src/lib/services/meaningful.service';
import {LIB_A_CONFIG_INJECTION_TOKEN} from '../lib-a-injection-token';
import {LibAConfig} from '../models/lib-a-config';

@Injectable()
export class ServiceAService {

  constructor(private meaningfulService: MeaningfulService,
              @Inject(LIB_A_CONFIG_INJECTION_TOKEN) private libAConfig: LibAConfig) { }

  doSomething() {};
}
