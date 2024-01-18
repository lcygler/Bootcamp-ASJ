package com.ejemplo.proyecto.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ejemplo.proyecto.models.Alumno;

@RestController
public class AlumnoController {

	// Listado de alumnos hardcodeado
	List<Alumno> alumnos = new ArrayList<>(
			List.of(new Alumno(1, "Bob", "Patiño", 9.5), new Alumno(2, "Moe", "Szyslak", 4),
					new Alumno(3, "Troy", "McClure", 2.6), new Alumno(4, "Edna", "Krabappel", 8.7)));

	@GetMapping("/alumnos") // [GET] localhost:8080/alumnos
	public List<Alumno> getAlumnos() {
		return alumnos;
	}

	@GetMapping("/alumnos/{id}") // [GET] localhost:8080/alumnos/1
	public Alumno getAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				return alumno;
			}
		}

		return null;
	}

	@DeleteMapping("/alumnos/{id}") // [DELETE] localhost:8080/alumnos/1
	public Alumno deleteAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				alumnos.remove(alumno);
				return alumno;
			}
		}

		return null;
	}

	@PostMapping("/alumnos") // [POST] localhost:8080/alumnos
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		int id = alumnos.size() + 1;

		alumno.setId(id);
		alumnos.add(alumno);

		return alumno;
	}

	@PutMapping("/alumnos/{id}") // [PUT] localhost:8080/alumnos/1
	public Alumno updateAlumnoById(@PathVariable int id, @RequestBody Alumno alumno) {
		for (int i = 0; i < alumnos.size(); i++) {
			if (alumnos.get(i).getId() == id) {
				alumno.setId(id);
				alumnos.set(i, alumno);
				return alumno;
			}
		}

		return null;
	}

	@PatchMapping("/alumnos/{id}") // [PATCH] localhost:8080/alumnos/1
	public Alumno patchAlumnoById(@PathVariable int id, @RequestBody Alumno datosAlumno) {
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				if (datosAlumno.getNombre() != null) {
					alumno.setNombre(datosAlumno.getNombre());
				}

				if (datosAlumno.getApellido() != null) {
					alumno.setApellido(datosAlumno.getApellido());
				}

				if (datosAlumno.getNota() != null) {
					alumno.setNota(datosAlumno.getNota());
				}

				return alumno;
			}
		}

		return null;
	}

}
