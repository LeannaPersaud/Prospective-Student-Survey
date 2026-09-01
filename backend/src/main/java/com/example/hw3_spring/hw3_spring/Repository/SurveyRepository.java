/* Author: Leanna Persaud
 * This program creates a SurveyRepository class which extends the JpaRepository, allowing it to perform CRUD opertions on Surveys.
 */

package com.example.hw3_spring.hw3_spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hw3_spring.hw3_spring.Entity.Survey;

public interface SurveyRepository extends JpaRepository<Survey, Long>{
    
}
