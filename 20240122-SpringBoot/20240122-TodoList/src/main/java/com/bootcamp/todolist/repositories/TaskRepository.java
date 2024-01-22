package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todolist.models.TaskModel;

public interface TaskRepository extends JpaRepository<TaskModel, Integer> {
	
	List<TaskModel> findAllByDeletedTrue();
}
