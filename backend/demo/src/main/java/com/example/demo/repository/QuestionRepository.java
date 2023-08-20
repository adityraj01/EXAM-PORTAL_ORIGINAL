package com.example.demo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Question;
import com.example.demo.model.Quiz;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Long>{

	Set<Question> findByQuiz(Quiz quiz);

}
