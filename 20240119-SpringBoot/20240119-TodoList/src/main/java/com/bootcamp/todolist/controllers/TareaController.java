package com.bootcamp.todolist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.services.TareaService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/tareas")
public class TareaController {

	// Inyección de dependencias (conecta Controller y Service)
	@Autowired
	TareaService tareaService;

	@GetMapping("/test")
	public ResponseEntity<String> getTest() {
		boolean condicion = true;
		String mensajeOk = "Respuesta de prueba OK";
		String mensajeError = "Respuesta de prueba NOT FOUND";

		if (condicion) {
			return ResponseEntity.ok(mensajeOk);
			// return ResponseEntity.status(HttpStatus.OK).body(mensajeOk);
			// return new ResponseEntity<>(mensajeOk, HttpStatus.OK);
		} else {
			return ResponseEntity.notFound().build();
			// return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensajeError);
			// return new ResponseEntity<>(mensajeError, HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping
	public ResponseEntity<List<TareaModel>> getAllTareas() {
		List<TareaModel> tareas = tareaService.getAllTareas();
		return ResponseEntity.ok(tareas);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TareaModel> getTareaById(@PathVariable Integer id) {
		TareaModel tarea = tareaService.getTareaById(id);

		if (tarea != null) {
			return ResponseEntity.ok(tarea);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping
	public ResponseEntity<TareaModel> createTarea(@RequestBody TareaModel tarea) {
		TareaModel newTarea = tareaService.createTarea(tarea);
		return ResponseEntity.ok(newTarea);
	}

	@PutMapping("/{id}")
	public ResponseEntity<TareaModel> updateTarea(@PathVariable Integer id, @RequestBody TareaModel tarea) {
		TareaModel updatedTarea = tareaService.updateTarea(id, tarea);

		if (updatedTarea != null) {
			return ResponseEntity.ok(updatedTarea);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<TareaModel> patchTarea(@PathVariable Integer id, @RequestBody TareaModel tarea) {
	    TareaModel patchedTarea = tareaService.patchTarea(id, tarea);

	    if (patchedTarea != null) {
	        return ResponseEntity.ok(patchedTarea);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<TareaModel> deleteTarea(@PathVariable Integer id) {
		TareaModel deletedTarea = tareaService.deleteTarea(id);

		if (deletedTarea != null) {
			return ResponseEntity.ok(deletedTarea);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
