package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TaskModel;
import com.bootcamp.todolist.repositories.TaskRepository;

@Service
public class TaskService {

	@Autowired
	TaskRepository taskRepository;

	// Get all tasks
	public List<TaskModel> getAllTasks() {
		return taskRepository.findAll();
	}

	// Get task by ID
	public Optional<TaskModel> getTaskById(String id) {
		return taskRepository.findById(id);
	}

	// Get tasks by search term
	public List<TaskModel> getTasksBySearchTerm(String searchTerm) {
		return taskRepository.findBySearchTerm(searchTerm);
	}

	// Create task
	public TaskModel createTask(TaskModel task) {
		return taskRepository.save(task);
	}

	// Update task
	public Optional<TaskModel> updateTask(String id, TaskModel task) {
		Optional<TaskModel> optionalTask = Optional.empty();

		if (taskRepository.existsById(id)) {
			optionalTask = Optional.of(taskRepository.save(task));
		}

		return optionalTask;
	}

	// Patch task
	public Optional<TaskModel> patchTask(String id, TaskModel task) {
		Optional<TaskModel> optionalTask = getTaskById(id);

		if (optionalTask.isPresent()) {
			TaskModel existingTarea = optionalTask.get();

			if (task.getDescription() != null) {
				existingTarea.setDescription(task.getDescription());
			}

			if (task.getDate() != null) {
				existingTarea.setDate(task.getDate());
			}

			if (task.getDone() != null) {
				existingTarea.setDone(task.getDone());
			}

			if (task.getDeleted() != null) {
				existingTarea.setDeleted(task.getDeleted());
			}

			return Optional.of(taskRepository.save(existingTarea));
		} else {
			return Optional.empty();
		}
	}

	// Delete all tasks (soft delete)
	public String clearAllTasks() {
		List<TaskModel> tasksList = getAllTasks();

		if (tasksList.isEmpty()) {
			return "The list of tasks is empty";
		}

		for (TaskModel task : tasksList) {
			task.setDeleted(true);
		}

		taskRepository.saveAll(tasksList);
		return "All tasks were cleared";
	}

	// Delete all tasks (hard delete)
	public String deleteAllTasks() {
		taskRepository.deleteAll();
		return "All tasks were deleted";
	}

	// Delete all tasks with deleted=true (hard delete)
	public String deleteFlaggedTasks() {
		List<TaskModel> deletedTasks = taskRepository.findAllByDeletedTrue();

		if (deletedTasks.isEmpty()) {
			return "No deleted tasks found";
		}

		taskRepository.deleteAll(deletedTasks);
		return "All tasks were deleted";
	}

	// Delete task by ID
	public Optional<TaskModel> deleteTaskById(String id) {
		Optional<TaskModel> optionalTask = getTaskById(id);

		if (optionalTask.isPresent()) {
			taskRepository.deleteById(id);
		}

		return optionalTask;
	}

}
