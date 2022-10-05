import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';

//Component
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//standalone Component
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule)],
}).catch(err => console.error(err));
