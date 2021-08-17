import {Inject, Injectable} from '@angular/core';
import {MEANINGFUL_CONFIG_INJECTION_TOKEN} from '../meaningful-config-injection-token';
import {MeaningfulServiceConfig} from '../models/meaningful-service-config';

@Injectable({
  providedIn: 'root'
})
export class MeaningfulService {

  constructor(@Inject(MEANINGFUL_CONFIG_INJECTION_TOKEN) private config: MeaningfulServiceConfig) { }
}
