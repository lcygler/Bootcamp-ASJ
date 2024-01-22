package com.example.thymeleaf.controllers;

import com.example.thymeleaf.models.Alumno;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/alumnos")
public class AlumnoController {

	private List<Alumno> alumnos = new ArrayList<>(
			List.of(new Alumno(1, "Bob", "Patiño", 9),
					new Alumno(2, "Moe", "Szyslak", 4),
					new Alumno(3, "Troy", "McClure", 2),
					new Alumno(4, "Edna", "Krabappel", 8)
			)
	);

	@GetMapping // [GET] localhost:8080/alumnos
	public String showAlumnosList(Model model) {
		model.addAttribute("alumnos", alumnos);
		return "index";
	}

	@GetMapping("/{id}") // [GET] localhost:8080/alumnos/{id}
	public String showAlumnoDetails(@PathVariable Integer id, Model model) {
		Alumno alumno = findAlumnoById(id);
		model.addAttribute("alumno", alumno);
		return "detail";
	}

	@GetMapping("/create") // [GET] localhost:8080/alumnos/create
	public String showCreateForm(Model model) {
		model.addAttribute("alumno", new Alumno());
		return "form";
	}

	@GetMapping("/edit") // [GET] localhost:8080/alumnos/edit?id={id}
	public String showEditForm(@RequestParam Integer id, Model model) {
		Alumno alumno = findAlumnoById(id);
		model.addAttribute("alumno", alumno);
		return "form";
	}

	@GetMapping("/form") // [GET] localhost:8080/alumnos/form?id={id}
	public String showForm(@RequestParam(required = false) Integer id, Model model) {
		if (id != null) {
			Alumno alumno = findAlumnoById(id);
			model.addAttribute("alumno", alumno);
		} else {
			model.addAttribute("alumno", new Alumno());
		}

		return "form";
	}

	@PostMapping("/form") // [POST] localhost:8080/alumnos/form
	public String processForm(@ModelAttribute Alumno alumno) {
		Integer id = alumno.getId();

		if (id == null) {
			alumno.setId(generateId());
			alumnos.add(alumno);
		} else {
			updateAlumno(id, alumno);
		}

		return "redirect:/alumnos";
	}

	@GetMapping("/delete/{id}")
	public String deleteAlumno(@PathVariable Integer id) {
		Alumno alumno = findAlumnoById(id);

		if (alumno != null) {
			alumnos.remove(alumno);
		}

		return "redirect:/alumnos";
	}

	private int generateId() {
		int maxId  = 0;

		for (Alumno alumno : alumnos) {
			if (alumno.getId() > maxId) {
				maxId  = alumno.getId();
			}
		}

		return maxId  + 1;
	}

	private Alumno findAlumnoById(Integer id) {
		for (Alumno alumno : alumnos) {
			if (alumno.getId().equals(id)) {
				return alumno;
			}
		}

		return null;
	}

	private void updateAlumno(Integer id, Alumno updatedAlumno) {
		Alumno alumno = findAlumnoById(id);

		if (alumno != null) {
			int index = alumnos.indexOf(alumno);
			alumnos.set(index, updatedAlumno);
		}
	}
}
