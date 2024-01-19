package com.ejemplo.proyecto.holamundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {
	
	/**
	 * El controlador maneja las peticiones que hace un cliente.
	 * Se necesitan:
	 * - URL
	 * - Método
	 * - Datos (opcional)
	 */
	@GetMapping("/saludo") // [GET] localhost:8080/saludo
	public String saludar() {
		return "Hola Mundo! Estamos probando Spring Boot";
	}

	@GetMapping("/saludo/{nombre}") // [GET] localhost:8080/saludo/Fulano
	public String saludarPersona(@PathVariable String nombre) {
		return "Hola " + nombre + "! Estamos probando Spring Boot";
	}

}

/** 
 * Spring Boot:
 * - Controllers: Manejan las peticiones de la API
 * - Services: Lógica de negocio
 * - Repositories: Permite hacer consultas a la DB
 * - Models: Representación de la estructura de una entidad
 */
