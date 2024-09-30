import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Provides HTTP client services for API calls
    provideAnimations(),  // Enables animations in your application
    provideRouter(routes), // Registers the routing configuration from app.routes.ts
  ],
};