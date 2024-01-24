package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "videos")
public class VideoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String urlVideo;
	
	private String categoria;
	
	private String titulo;
	
	@Column(columnDefinition = "TEXT")
	private String descripcion;
	
	private Integer cantVistas;
	
	private Integer cantMegusta;
	
	private Integer totalEstrellas;

	public VideoModel() {
	}

	public VideoModel(Integer id, String urlVideo, String categoria, String titulo, String descripcion, Integer cantVistas,
			Integer cantMegusta, Integer totalEstrellas) {
		this.id = id;
		this.urlVideo = urlVideo;
		this.categoria = categoria;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.cantVistas = cantVistas;
		this.cantMegusta = cantMegusta;
		this.totalEstrellas = totalEstrellas;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrlVideo() {
		return urlVideo;
	}

	public void setUrlVideo(String urlVideo) {
		this.urlVideo = urlVideo;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getCantVistas() {
		return cantVistas;
	}

	public void setCantVistas(Integer cantVistas) {
		this.cantVistas = cantVistas;
	}

	public Integer getCantMegusta() {
		return cantMegusta;
	}

	public void setCantMegusta(Integer cantMegusta) {
		this.cantMegusta = cantMegusta;
	}

	public Integer getTotalEstrellas() {
		return totalEstrellas;
	}

	public void setTotalEstrellas(Integer totalEstrellas) {
		this.totalEstrellas = totalEstrellas;
	}

}