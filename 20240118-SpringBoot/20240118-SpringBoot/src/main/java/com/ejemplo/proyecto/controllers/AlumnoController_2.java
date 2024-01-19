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
public class AlumnoController_2 {

    List<Alumno> alumnos = new ArrayList<>(List.of(
            new Alumno(1, "Bob", "Patiño", 9.5),
            new Alumno(2, "Moe", "Szyslak", 4),
            new Alumno(3, "Troy", "McClure", 2.6),
            new Alumno(4, "Edna", "Krabappel", 8.7)
    ));

    @GetMapping("/alumnos") // [GET] localhost:8080/alumnos
    public List<Alumno> getAllAlumnos() {
        return alumnos;
    }

    @GetMapping("/alumnos/{id}") // [GET] localhost:8080/alumnos/1
    public Alumno getAlumnoById(@PathVariable int id) {
        return buscarAlumnoPorId(id);
    }

    @PostMapping("/alumnos") // [POST] localhost:8080/alumnos
    public Alumno createAlumno(@RequestBody Alumno alumno) {
        int id = alumnos.size() + 1;
        alumno.setId(id);
        alumnos.add(alumno);
        return alumno;
    }

    @PutMapping("/alumnos/{id}") // [PUT] localhost:8080/alumnos/1
    public Alumno updateAlumno(@PathVariable int id, @RequestBody Alumno alumno) {
        Alumno alumnoEncontrado = buscarAlumnoPorId(id);
        int indice = alumnos.indexOf(alumnoEncontrado);
        
        if (alumnoEncontrado != null) {
        	alumno.setId(id);
            alumnos.set(indice, alumno);
        }
        
        return alumno;
    }

    @PatchMapping("/alumnos/{id}") // [PATCH] localhost:8080/alumnos/1
    public Alumno patchAlumno(@PathVariable int id, @RequestBody Alumno alumno) {
        Alumno alumnoEncontrado = buscarAlumnoPorId(id);
        
        if (alumnoEncontrado != null) {
            if (alumno.getNombre() != null) {
            	alumnoEncontrado.setNombre(alumno.getNombre());
            }

            if (alumno.getApellido() != null) {
            	alumnoEncontrado.setApellido(alumno.getApellido());
            }

            if (alumno.getNota() != null) {
            	alumnoEncontrado.setNota(alumno.getNota());
            }
        }

        return alumnoEncontrado;
    }
    
    @DeleteMapping("/alumnos/{id}") // [DELETE] localhost:8080/alumnos/1
    public Alumno deleteAlumno(@PathVariable int id) {
        Alumno alumnoEncontrado = buscarAlumnoPorId(id);
        
        if (alumnoEncontrado != null) {
            alumnos.remove(alumnoEncontrado);
        }
        
        return alumnoEncontrado;
    }

    private Alumno buscarAlumnoPorId(int id) {
        for (Alumno alumno : alumnos) {
            if (alumno.getId() == id) {
                return alumno;
            }
        }
        
        return null;
    }
}
