package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long qid;
	private String description;
	private String title;
	private String maxMarks;
	private String numberOfQuestions;
	private boolean active = false;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Category category;
	
	@OneToMany(mappedBy="quiz",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<Question> question = new HashSet<>();
	public Quiz(Long qid, String description, String title, String maxMarks, String numberOfQuestions, boolean active) {
		this.qid = qid;
		this.description = description;
		this.title = title;
		this.maxMarks = maxMarks;
		this.numberOfQuestions = numberOfQuestions;
		this.active = active;
	}
	public Quiz() {
	}
	public Long getQid() {
		return qid;
	}
	public void setQid(Long qid) {
		this.qid = qid;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMaxMarks() {
		return maxMarks;
	}
	public void setMaxMarks(String maxMarks) {
		this.maxMarks = maxMarks;
	}
	public String getNumberOfQuestions() {
		return numberOfQuestions;
	}
	public void setNumberOfQuestions(String numberOfQuestions) {
		this.numberOfQuestions = numberOfQuestions;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Set<Question> getQuestion() {
		return question;
	}
	public void setQuestion(Set<Question> question) {
		this.question = question;
	}

}
