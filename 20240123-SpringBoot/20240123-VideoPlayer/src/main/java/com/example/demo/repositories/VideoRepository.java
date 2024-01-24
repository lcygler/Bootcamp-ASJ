package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.VideoModel;

public interface VideoRepository extends JpaRepository<VideoModel, Integer>{

}
