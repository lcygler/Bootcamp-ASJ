package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.todolist.models.TaskModel;

public interface TaskRepository extends MongoRepository<TaskModel, String> {

	List<TaskModel> findAllByDeletedTrue();

	@Query("{ 'description' : { $regex: ?0, $options: 'i' } }")
	List<TaskModel> findBySearchTerm(String searchTerm);

	@Query("{ 'description' : { $regex: :#{#searchTerm}, $options: 'i' } }")
	List<TaskModel> findBySearchTerm2(@Param("searchTerm") String searchTerm);

}
