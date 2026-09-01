/*Author: Leanna Persaud
Sets up functionality for the survey form including submission verification and cancellation.
*/

import { Component } from '@angular/core';
import { SurveyService } from '../../service/survey-service';
import { Survey } from '../../entity/survey';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  standalone: false,
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.css',
})
export class SurveyForm {
  /*Initializes an empty Survey object */
  survey: Survey = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    telephone: "",
    email: "",
    date: "",
    liked: "",
    interest: "",
    likelihood: "",
    comments: ""
  };

  /*For tracking which of the checkboxes are checked in the Survey */
  checkedBoxes: [boolean, string][] = [
    [false, "students"],
    [false, "location"],
    [false, "campus"],
    [false, "atmosphere"],
    [false, "dorm rooms"],
    [false, "sports"]
  ]

  /*Survey-form constructor, injects the SurveyService */
  constructor(private surveyService: SurveyService){

  }

  /*Clears the Survey form upon cancellation */
  onCancel(form: NgForm): void{
    this.surveyService.clearForm(this.survey);
    form.resetForm();
    alert("Survey successfully canceled!")
  }

  /*Calls the saveSurvey function if a valid Survey is submitted. Sends an alert on success/failure*/
  onSubmit(form: NgForm): void{
    if(this.surveyService.validateForm(this.survey)){
      this.getCheckedOptions();
      this.surveyService.saveSurvey(this.survey).subscribe({
        next: () => {
          this.surveyService.clearForm(this.survey);
          form.resetForm();
          alert("Survey successfully submitted!")
        },
        error: () => alert("Error: Failed to submit survey")
      });
    }
  }

  /*Finds which of the checkboxes are checked, transforming them into a string list saved in the Survey */
  getCheckedOptions(): void{
    this.survey.liked = "";
    let liked: string[] = [];
    this.checkedBoxes.forEach((option) => {
      if(option[0]){
        liked.push(option[1]);
      }
    });

    this.survey.liked = liked.join(", ")
  }
  
}
