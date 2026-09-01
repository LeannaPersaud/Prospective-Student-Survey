/* Author: Leanna Persaud
 * This class implements the Service layer and defines the possible CRUD operations that can be performed.
 */

package com.example.hw3_spring.hw3_spring.Service;

import java.util.List;

import com.example.hw3_spring.hw3_spring.Entity.Survey;

public interface SurveyService {
    Survey saveSurvey(Survey survey);
    List<Survey> getAllSurveys();
    Survey getSurveyById(long id);
    Survey updateSurvey(Survey newSurvey, long id);
    void deleteSurvey(long id);
}
