/*Author: Leanna Persaud
This program sets up the necessary declarations, imports, and providers for the Angular project.
*/

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homepage } from './components/homepage/homepage';
import { SurveyForm } from './components/survey-form/survey-form';
import { SurveyList } from './components/survey-list/survey-list';
import { SurveyService } from './service/survey-service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Homepage,
    SurveyForm,
    SurveyList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    SurveyService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
