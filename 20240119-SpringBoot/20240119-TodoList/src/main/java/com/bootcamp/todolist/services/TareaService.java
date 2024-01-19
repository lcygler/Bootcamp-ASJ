package com.bootcamp.todolist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {

	// Inyección de dependencias (conecta Service y Repository)
	@Autowired
	TareaRepository tareaRepository;

	// Obtener tareas
	public List<TareaModel> getAllTareas() {
		return tareaRepository.findAll(); // SELECT * FROM tareas;
	}

	// Obtener tarea por ID
	public TareaModel getTareaById(Integer id) {
		return tareaRepository.findById(id).orElse(null);
	}

	// Insertar tarea
	public TareaModel createTarea(TareaModel tarea) {
		return tareaRepository.save(tarea);
	}

	// Modificar tarea
	public TareaModel updateTarea(Integer id, TareaModel tarea) {
		TareaModel updatedTarea = null;

		if (tareaRepository.existsById(id)) {
			tarea.setId(id);
			updatedTarea = tareaRepository.save(tarea);
		}

		return updatedTarea;
	}

	// Modificar tarea (parcial)
	public TareaModel patchTarea(Integer id, TareaModel tarea) {
		TareaModel existingTarea = getTareaById(id);

		if (existingTarea != null) {
			if (tarea.getNombre() != null) {
				existingTarea.setNombre(tarea.getNombre());
			}

			if (tarea.getDescripcion() != null) {
				existingTarea.setDescripcion(tarea.getDescripcion());
			}

			if (tarea.getEstado() != null) {
				existingTarea.setEstado(tarea.getEstado());
			}

			existingTarea = tareaRepository.save(existingTarea);
		}

		return existingTarea;
	}

	// Eliminar tarea
	public TareaModel deleteTarea(Integer id) {
		TareaModel tarea = getTareaById(id);

		if (tarea != null) {
			tareaRepository.deleteById(id);
		}

		return tarea;
	}

}
