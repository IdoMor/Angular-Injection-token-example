import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LibAModule} from '@injection-token-exp/lib-a';
import {LIB_A_CONFIG_INJECTION_TOKEN} from '../../../../libs/lib-a/src/lib/lib-a-injection-token';
import {LibAConfigProvider} from './lib-a-config-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibAModule],
  providers: [
    {
      provide: LIB_A_CONFIG_INJECTION_TOKEN,
      useValue: LibAConfigProvider
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
