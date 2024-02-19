package com.bootcamp.todolist.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.ValidationUtils;
import com.bootcamp.todolist.models.TaskModel;
import com.bootcamp.todolist.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
public class TaskController {

	@Autowired
	TaskService taskService;

	@GetMapping
	public ResponseEntity<List<TaskModel>> getAllTareas() {
		List<TaskModel> tareas = taskService.getAllTasks();
		return ResponseEntity.ok(tareas);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TaskModel> getTareaById(@PathVariable String id) {
		Optional<TaskModel> optionalTask = taskService.getTaskById(id);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/search/{searchTerm}")
	public ResponseEntity<List<TaskModel>> getTareasBySearchTerm(@PathVariable String searchTerm) {
		List<TaskModel> tareas = taskService.getTasksBySearchTerm(searchTerm);
		return ResponseEntity.ok(tareas);
	}

	@PostMapping
	public ResponseEntity<?> createTask(@Valid @RequestBody TaskModel task, BindingResult bindingResult) {
		Map<String, String> errors = ValidationUtils.handleBindingResult(bindingResult);

		if (!errors.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
		}

		TaskModel createdTask = taskService.createTask(task);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateTask(@PathVariable String id, @Valid @RequestBody TaskModel task,
			BindingResult bindingResult) {
		Map<String, String> errors = ValidationUtils.handleBindingResult(bindingResult);

		if (!errors.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
		}

		Optional<TaskModel> optionalTask = taskService.updateTask(id, task);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PatchMapping("/{id}")
	public ResponseEntity<TaskModel> patchTask(@PathVariable String id, @RequestBody TaskModel task) {
		Optional<TaskModel> optionalTask = taskService.patchTask(id, task);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/clear-all")
	public ResponseEntity<String> clearAllTasks() {
		String message = taskService.clearAllTasks();
		return ResponseEntity.ok(message);
	}

	@GetMapping("/delete-all")
	public ResponseEntity<String> deleteFlaggedTasks() {
		String message = taskService.deleteFlaggedTasks();
		return ResponseEntity.ok(message);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<TaskModel> deleteTaskById(@PathVariable String id) {
		Optional<TaskModel> optionalTask = taskService.deleteTaskById(id);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
