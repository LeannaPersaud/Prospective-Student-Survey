/*Author: Leanna Persaud
This program provides the routing path for the two components: the Survey Form and the Survey Form List.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyForm } from './components/survey-form/survey-form';
import { SurveyList } from './components/survey-list/survey-list';

const routes: Routes = [
  {path: 'survey', component: SurveyForm},
  {path: 'listsurveys', component: SurveyList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
