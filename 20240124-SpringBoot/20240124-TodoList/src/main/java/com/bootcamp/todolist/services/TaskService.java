package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TaskModel;
import com.bootcamp.todolist.repositories.TaskRepository;

@Service
public class TaskService {

	// Inyección de dependencias (conecta Service y Repository)
	@Autowired
	TaskRepository taskRepository;

	// Obtener tareas
	public List<TaskModel> getAllTasks() {
		// return taskRepository.myQuerySQL("Descrip");
		// return taskRepository.myQueryJPQL("Descrip");
		return taskRepository.findAll();
	}

	// Obtener tarea por ID
	public Optional<TaskModel> getTaskById(Integer id) {
		return taskRepository.findById(id);
	}

	// Insertar tarea
	public TaskModel createTask(TaskModel task) {
		return taskRepository.save(task);
	}

	// Modificar tarea
	public Optional<TaskModel> updateTask(Integer id, TaskModel task) {
		Optional<TaskModel> optionalTask = Optional.empty();

		if (taskRepository.existsById(id)) {
			task.setId(id);
			optionalTask = Optional.of(taskRepository.save(task));
		}

		return optionalTask;
	}

	// Modificar tarea (parcial)
	public Optional<TaskModel> patchTask(Integer id, TaskModel task) {
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

	// Eliminar todas las tareas (borrado lógico)
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

	// Eliminar todas las tareas con deleted=true (borrado físico)
	public String deleteFlaggedTasks() {
		List<TaskModel> deletedTasks = taskRepository.findAllByDeletedTrue();

		if (deletedTasks.isEmpty()) {
			return "No deleted tasks found";
		}

		taskRepository.deleteAll(deletedTasks);
		return "All tasks were deleted";
	}

	// Eliminar todas las tareas (borrado físico)
	public String deleteAllTasks() {
		taskRepository.deleteAll();
		return "All tasks were deleted";
	}

	// Eliminar tarea
	public Optional<TaskModel> deleteTaskById(Integer id) {
		Optional<TaskModel> optionalTask = getTaskById(id);
		// optionalTask.ifPresent(task -> taskRepository.deleteById(id));

		if (optionalTask.isPresent()) {
			taskRepository.deleteById(id);
		}

		return optionalTask;
	}

}
