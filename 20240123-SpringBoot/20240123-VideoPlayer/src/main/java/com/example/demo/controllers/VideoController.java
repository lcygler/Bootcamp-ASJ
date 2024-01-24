package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.VideoModel;
import com.example.demo.services.VideoService;

@RestController
@RequestMapping("/videos")
@CrossOrigin
public class VideoController {

	@Autowired
	VideoService videoService;

	@GetMapping("/test")
	public String test() {
		return "Test";
	}

	@GetMapping()
	public ResponseEntity<List<VideoModel>> getVideos() {
		return ResponseEntity.ok(videoService.getAllVideos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<VideoModel> getVideoById(@PathVariable Integer id) {
		Optional<VideoModel> optionalVideo = videoService.getVideoById(id);
		
		if (optionalVideo.isPresent()) {
			return ResponseEntity.ok(optionalVideo.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping()
	public ResponseEntity<VideoModel> createVideo(@RequestBody VideoModel video) {
		VideoModel createdVideo = videoService.createVideo(video);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdVideo);
	}

	@PutMapping("/{id}")
	public ResponseEntity<VideoModel> updateVideo(@PathVariable Integer id, @RequestBody VideoModel video) {
		Optional<VideoModel> optionalVideo = videoService.updateVideo(id, video);
		
		if (optionalVideo.isPresent()) {
			return ResponseEntity.ok(optionalVideo.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PatchMapping("/{id}")
	public ResponseEntity<VideoModel> patchTask(@PathVariable Integer id, @RequestBody VideoModel video) {
		Optional<VideoModel> optionalVideo = videoService.patchVideo(id, video);
		
		if (optionalVideo.isPresent()) {
			return ResponseEntity.ok(optionalVideo.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<VideoModel> deleteVideo(@PathVariable Integer id) {
		Optional<VideoModel> optionalVideo = videoService.deleteVideo(id);
		
		if (optionalVideo.isPresent()) {
			return ResponseEntity.ok(optionalVideo.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}