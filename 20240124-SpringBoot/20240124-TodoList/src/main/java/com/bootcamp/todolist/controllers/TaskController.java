package com.bootcamp.todolist.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
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
// @CrossOrigin
public class TaskController {

	// Inyección de dependencias (conecta Controller y Service)
	@Autowired
	TaskService taskService;

	@GetMapping("/test")
	public ResponseEntity<String> getTest() {
		int num = 2;

		switch (num) {
		case 0:
			return ResponseEntity.ok("OK");
		// return ResponseEntity.status(HttpStatus.OK).body("OK");
		// return new ResponseEntity<>("OK", HttpStatus.OK);
		case 1:
			return ResponseEntity.notFound().build();
		// return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT FOUND");
		// return new ResponseEntity<>("NOT FOUND", HttpStatus.NOT_FOUND);
		case 2:
			return ResponseEntity.created(null).build(); // Sin location header
		// return ResponseEntity.created(URI.create("/new-resource")).build();
		// return ResponseEntity.status(HttpStatus.CREATED).build();
		// return ResponseEntity.status(HttpStatus.CREATED).body("CREATED");
		default:
			return ResponseEntity.badRequest().body("Ocurrió un error");
		}
	}

	@GetMapping
	public ResponseEntity<List<TaskModel>> getAllTareas() {
		List<TaskModel> tareas = taskService.getAllTasks();
		return ResponseEntity.ok(tareas);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TaskModel> getTareaById(@PathVariable Integer id) {
		Optional<TaskModel> optionalTask = taskService.getTaskById(id);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

//	[POST] sin validaciones
//	@PostMapping
//	public ResponseEntity<TaskModel> createTask(@RequestBody TaskModel task) {
//		TaskModel createdTask = taskService.createTask(task);
//		return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
//	}

//	[POST] con validaciones
//	@PostMapping
//	public ResponseEntity<?> createTask(@Valid @RequestBody TaskModel task, BindingResult bindingResult) {
//		if (bindingResult.hasErrors()) {
//			Map<String, String> errors = new HashMap<>();
//
//			bindingResult.getFieldErrors().forEach(error -> {
//				String field = error.getField();
//				String errorMsg = error.getDefaultMessage();
//				errors.put(field, errorMsg);
//			});
//
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
//		}
//
//		TaskModel createdTask = taskService.createTask(task);
//		return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
//	}

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
	public ResponseEntity<TaskModel> updateTask(@PathVariable Integer id, @RequestBody TaskModel task) {
		Optional<TaskModel> optionalTask = taskService.updateTask(id, task);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PatchMapping("/{id}")
	public ResponseEntity<TaskModel> patchTask(@PathVariable Integer id, @RequestBody TaskModel task) {
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
	public ResponseEntity<TaskModel> deleteTaskById(@PathVariable Integer id) {
		Optional<TaskModel> optionalTask = taskService.deleteTaskById(id);

		if (optionalTask.isPresent()) {
			return ResponseEntity.ok(optionalTask.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
