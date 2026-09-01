/*Author: Leanna Persaud
Sets up the CRUD operations for the survey-list component.
*/

import { Component, OnInit } from '@angular/core';
import { Survey } from '../../entity/survey';
import { SurveyService } from '../../service/survey-service';

@Component({
  selector: 'app-survey-list',
  standalone: false,
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.css',
})
export class SurveyList implements OnInit{
  surveys: Survey[] = []; //The list of Surveys in the database
  surveyCopy: Survey | null = null; //Survey which is created when a Survey is being edited
  //Keeps track of which checkboxes are checked in a Survey
  checkedBoxes: [boolean, string][] = [
    [false, "students"],
    [false, "location"],
    [false, "campus"],
    [false, "atmosphere"],
    [false, "dorm rooms"],
    [false, "sports"]
  ]

  /*Constructs the Survey-List componenet and injects the SurveyService*/
  constructor(private surveyService: SurveyService){

  }

  /*Displays all Surveys in a tabular format on initialization*/
  ngOnInit(): void {
    this.displaySurveys();
  }

  /*Gets all Surveys through a REST call. Adds them to the Survey list on success, sends an alert on failure.*/
  displaySurveys(): void{
    this.surveyService.getAllSurveys().subscribe({
      next: list => this.surveys = list,
      error: err => {
        console.log(err);
        alert("Failed to display surveys.");
      }
    });
  }

  /*Sets the Survey currently being edited to the surveyCopy, if no other Survey is being edited*/
  editSurvey(survey: Survey): void{
    if(this.surveyCopy != null){
      alert("A survey is already being edited. Please save or cancel that survey before editing another.");
    }
    else{
      this.surveyCopy = {...survey};
      this.loadCheckBoxes(survey);
    }
  }

  /*Cancels the updates to the Survey being edited*/
  cancelUpdate(): void{
    this.surveyCopy = null;
    this.checkedBoxes.forEach((option) => {
      option[0] = false;
    });
  }

  /*Updates the Survey currently being edited if it is valid. Sends an alert on success/failure. Updates the table
  on success*/
  updateSurvey(): void{
    if (this.surveyCopy != null && this.surveyService.validateForm(this.surveyCopy)) {
      this.updateCheckedBoxes();
      this.surveyService.updateSurvey(this.surveyCopy, this.surveyCopy.id!).subscribe({
        next: () => {
          this.surveyCopy = null;
          this.displaySurveys();  
          alert("Survey successfully updated.");
        },
        error: err => {
          console.log(err);
          alert("Error: Failed to update survey");
        }
      });
    }
    else{
      this.cancelUpdate();
    }
  }

  /*Deletes the Survey with the given ID. Sends an alert on success/failure*/
  deleteSurvey(id: number): void{
    if(confirm(`Are you sure you want to delete Survey ${id}?`)){
      this.surveyService.deleteSurvey(id).subscribe({
        next: () => {
          this.displaySurveys();
          alert("Survey successfully deleted.");
        },
        error: err => {
          console.log(err);
          alert("Error: Failed to delete survey");
        }
      });
    }
  }

  /*Automatically checks the checkboxes when editing a Survey*/
  loadCheckBoxes(survey: Survey): void{
    let checkedOptions: string[] = survey.liked.split(", ");
    this.checkedBoxes.forEach((option) => {
      if(checkedOptions.includes(option[1])){
        option[0] = true;
      }
    });
  }

  /*Updates the checkboxes when saving an edited Survey*/
  updateCheckedBoxes(): void{
    this.surveyCopy!.liked = "";
    let liked: string[] = [];
    this.checkedBoxes.forEach((option) => {
      if(option[0]){
        liked.push(option[1]);
      }
    });

    this.surveyCopy!.liked = liked.join(", ");
  }

}
