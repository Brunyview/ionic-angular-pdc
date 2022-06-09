import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      IonicModule.forRoot(),
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () =>
            import('./app/tabs/tabs.page').then((m) => m.TabsPage),
          loadChildren: () =>
            import('./app/tabs/tabs.routing').then((m) => m.routes),
        },
      ]),
      HttpClientModule
    ),
  ],
}).catch((err) => console.error(err));
