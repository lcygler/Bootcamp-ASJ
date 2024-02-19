package com.bootcamp.todolist.models;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "tasks")
public class TaskModel {

	@Id
	private String id;

	@NotBlank(message = "Description cannot be blank")
	private String description;

	private LocalDateTime date;

	private Boolean done;

	private Boolean deleted;

	public TaskModel() {
	}

	public TaskModel(String id, String description, LocalDateTime date, Boolean done, Boolean deleted) {
		this.id = id;
		this.description = description;
		this.date = date;
		this.done = done;
		this.deleted = deleted;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	@Override
	public String toString() {
		return "TaskModel [id=" + id + ", description=" + description + ", date=" + date + ", done=" + done
				+ ", deleted=" + deleted + "]";
	}

}
