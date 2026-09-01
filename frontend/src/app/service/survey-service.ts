/*Author: Leanna Persaud
This programs sets up the survey service which allows for the CRUD operations using REST calls. It also includes functions to
validate a survey's inputs and clear the survey.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../entity/survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl: string = "http://localhost:8080/api/surveys"

  constructor(private http: HttpClient){

  }

  /*Saves the given Survey to the backend */
  saveSurvey(survey: Survey): Observable<Survey>{
    return this.http.post<Survey>(this.apiUrl, survey);
  }

  /*Returns all the Surveys in the database*/
  getAllSurveys(): Observable<Survey[]>{
    return this.http.get<Survey[]>(this.apiUrl);
  }

  /*Returns the Survey with the given ID*/
  getSurveyById(id: number): Observable<Survey>{
    return this.http.get<Survey>(`${this.apiUrl}/${id}`);
  }

  /*Updates the Survey with the given ID with the given Survey's information*/
  updateSurvey(survey: Survey, id: number): Observable<Survey>{
    return this.http.put<Survey>(`${this.apiUrl}/${id}`, survey);
  }

  /*Deletes the Survey with the given ID*/
  deleteSurvey(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /*Checks if the given Survey has a valid email input*/
  isValidEmail(survey: Survey): boolean{
  const input = document.createElement('input');
  input.type = 'email';
  input.value = survey.email;
  return input.checkValidity();
  }

  /*Checks if the given Survey has a valid telephone input*/
  isValidPhone(survey: Survey): boolean{
    const input = document.createElement('input');
    input.type = 'tel';
    input.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
    input.value = survey.telephone;
    return input.checkValidity();
  }

  /* Validates various areas of the form */
  validateForm(survey: Survey): boolean{
    let errMsg: string = ""; 

    /* Validates that the name field only contains alphabetical characters */
    if(survey.firstName.length==0 || !/^[a-zA-Z\s\-.]+$/.test(survey.firstName)){
        errMsg += "\n-First name must be filled out and contain only letters";
        survey.firstName = "";
    }

    if(survey.lastName.length==0 || !/^[a-zA-Z\s\-.]+$/.test(survey.lastName)){
        errMsg += "\n-Last name must be filled out and contain only letters";
        survey.lastName = "";
    }

    /* Validates that the street only contains appropriate characters */
    if(survey.street.length == 0  || !/^[a-zA-Z0-9\s\-.,#]+$/.test(survey.street)){
        errMsg += "\n-Street name must be filled out and must contain only letters and numbers";
        survey.street = "";
    }

    /* Validates that the city only contains numerical and alphabetical characters */
    if(survey.city.length == 0  || !/^[a-zA-Z0-9\s\-.,#]+$/.test(survey.city)){
        errMsg += "\n-City name must be filled out and must contain only letters and numbers";
        survey.city = "";
    }

    /* Validates that the state only contains alphabetical characters */
    if(survey.state.length==0 || !/^[a-zA-Z]+$/.test(survey.state)){
        errMsg += "\n-State must be filled out and contain only letters";
        survey.state = "";
    }

    /* Validates that the zipcode only contains numerical characters */
    if(survey.zip.length == 0 || !/^[0-9]+$/.test(survey.zip)){
        errMsg += "\n-Zipcode must be filled out and must contain only numbers";
        survey.zip = "";
    }

    if(survey.telephone.length == 0 || !this.isValidPhone(survey)){
        errMsg += "\n-Phone number must be filled out and in the valid format ###-###-####";
        survey.telephone = "";
    }

    /* Validates the email address format */
    if(survey.email.length==0 || !this.isValidEmail(survey)){
        errMsg += "\n-Email must be filled out and in the valid format'name@domain.com'";
        survey.email = "";
    }

    if(survey.date.length == 0){
      errMsg += "\n-Date of survey must be filled out";
      survey.date = "";
    }

    /* Alerts the users of any errors, otherwise, it submits the form */
    if(errMsg.length != 0){
      alert(errMsg);
      return false;
    }
    else{
        return true;
    }
  }

  /*Clears all inputs in the given Survey*/
  clearForm(survey: Survey): void{
    survey.firstName = "";
    survey.lastName = "";
    survey.street = "";
    survey.city = "";
    survey.state = ""
    survey.zip = ""
    survey.telephone = "";
    survey.email = "";
    survey.date = "";
    survey.liked = "";
    survey.interest = "";
    survey.likelihood = "";
    survey.comments = "";
  }
}
