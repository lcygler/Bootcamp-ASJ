package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.todolist.models.TaskModel;

public interface TaskRepository extends JpaRepository<TaskModel, Integer> {

	List<TaskModel> findAllByDeletedTrue();

	// SQL
	@Query(value = "SELECT id, description, date, done, deleted FROM tasks WHERE description LIKE %:texto% ORDER BY description ASC", nativeQuery = true)
	List<TaskModel> myQuerySQL(@Param("texto") String texto);
	
	// JPQL
	@Query("SELECT t FROM TaskModel t WHERE t.description LIKE %:texto% ORDER BY t.description ASC")
	List<TaskModel> myQueryJPQL(@Param("texto") String texto);

}
