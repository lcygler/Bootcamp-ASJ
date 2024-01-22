package com.example.thymeleaf.models;

public class Alumno {

	private Integer id;
	private String nombre;
	private String apellido;
	private Integer nota;

	public Alumno() {
	}

	public Alumno(Integer id, String nombre, String apellido, Integer nota) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.nota = nota;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Integer getNota() {
		return nota;
	}

	public void setNota(Integer nota) {
		this.nota = nota;
	}

}
