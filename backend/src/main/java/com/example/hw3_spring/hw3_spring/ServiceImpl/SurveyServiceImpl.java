/* Author: Leanna Persaud
 * This class provides the implementation for the Service layer
 */

package com.example.hw3_spring.hw3_spring.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.hw3_spring.hw3_spring.Entity.Survey;
import com.example.hw3_spring.hw3_spring.Repository.SurveyRepository;
import com.example.hw3_spring.hw3_spring.Service.SurveyService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SurveyServiceImpl implements SurveyService{
    public SurveyRepository surveyRepository;

    public SurveyServiceImpl(SurveyRepository surveyRepository){
        super();
        this.surveyRepository = surveyRepository;
    }

    @Override
    public Survey saveSurvey(Survey survey){
        return surveyRepository.save(survey);
    }

    @Override
    public List<Survey> getAllSurveys(){
        return surveyRepository.findAll();
    }

    @Override
    public Survey getSurveyById(long id){
        return surveyRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Survey with ID " + id + " not found."));
    }

    @Override
    public Survey updateSurvey(Survey newSurvey, long id){
        Survey survey = surveyRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Survey with ID " + id + " not found."));

        survey.setFirstName(newSurvey.getFirstName());
        survey.setLastName(newSurvey.getLastName());
        survey.setStreet(newSurvey.getStreet());
        survey.setCity(newSurvey.getCity());
        survey.setState(newSurvey.getState());
        survey.setZip(newSurvey.getZip());
        survey.setTelephone(newSurvey.getTelephone());
        survey.setEmail(newSurvey.getEmail());
        survey.setDate(newSurvey.getDate());

        survey.setLiked(newSurvey.getLiked());
        survey.setInterest(newSurvey.getInterest());
        survey.setLikelihood(newSurvey.getLikelihood());
        survey.setComments(newSurvey.getComments());

        return surveyRepository.save(survey);
    }

    @Override
    public void deleteSurvey(long id){
        surveyRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Survey with ID " + id + " not found."));
        
        surveyRepository.deleteById(id);
    }
}
