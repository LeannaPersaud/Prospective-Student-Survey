/* Author: Leanna Persaud
 * This class creates a Controller which allows for REST calls. 
 */

package com.example.hw3_spring.hw3_spring.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hw3_spring.hw3_spring.Entity.Survey;
import com.example.hw3_spring.hw3_spring.Service.SurveyService;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyController {
    private final SurveyService surveyService;

    public SurveyController(SurveyService surveyService){
        super();
        this.surveyService = surveyService;
    }

    @PostMapping
    public ResponseEntity<Survey> saveSurvey(@RequestBody Survey survey){
        return new ResponseEntity<>(surveyService.saveSurvey(survey), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Survey> getAllSurveys(){
        return surveyService.getAllSurveys();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable("id") long surveyId){
        return new ResponseEntity<>(surveyService.getSurveyById(surveyId), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable("id") long surveyId, @RequestBody Survey survey){
        return new ResponseEntity<>(surveyService.updateSurvey(survey, surveyId), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSurvey(@PathVariable("id") long surveyId){
        surveyService.deleteSurvey(surveyId);

        return ResponseEntity.noContent().build();
    }
}
