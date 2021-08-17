import {InjectionToken} from '@angular/core';
import {MeaningfulServiceConfig} from './models/meaningful-service-config';

export const MEANINGFUL_CONFIG_INJECTION_TOKEN = new InjectionToken<MeaningfulServiceConfig>('MeaningfulServiceConfig');
