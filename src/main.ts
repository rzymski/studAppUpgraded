import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
