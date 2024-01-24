package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.VideoModel;
import com.example.demo.repositories.VideoRepository;

@Service
public class VideoService {

	@Autowired
	VideoRepository videoRepository;

	public List<VideoModel> getAllVideos() {
		return videoRepository.findAll();
	}

	public Optional<VideoModel> getVideoById(Integer id) {
		return videoRepository.findById(id);
	}

	public VideoModel createVideo(VideoModel video) {
		video.setUrlVideo(formatUrl(video.getUrlVideo()));
		return videoRepository.save(video);
	}

	public Optional<VideoModel> updateVideo(Integer id, VideoModel video) {
		Optional<VideoModel> optionalVideo = Optional.empty();

		if (videoRepository.existsById(id)) {
			video.setId(id);
			video.setUrlVideo(formatUrl(video.getUrlVideo()));
			optionalVideo = Optional.of(videoRepository.save(video));
		}

		return optionalVideo;
	}

	public Optional<VideoModel> updateVideoDetails(Integer id, VideoModel video) {
		Optional<VideoModel> optionalVideo = getVideoById(id);

		if (optionalVideo.isPresent()) {
			VideoModel existingVideo = optionalVideo.get();

			existingVideo.setUrlVideo(formatUrl(video.getUrlVideo()));
			existingVideo.setCategoria(video.getCategoria());
			existingVideo.setTitulo(video.getTitulo());
			existingVideo.setDescripcion(video.getDescripcion());
			existingVideo.setCantVistas(video.getCantVistas());
			existingVideo.setCantMegusta(video.getCantMegusta());
			existingVideo.setTotalEstrellas(video.getTotalEstrellas());

			return Optional.of(videoRepository.save(existingVideo));
		} else {
			return Optional.empty();
		}
	}

	public Optional<VideoModel> patchVideo(Integer id, VideoModel video) {
		Optional<VideoModel> optionalVideo = getVideoById(id);

		if (optionalVideo.isPresent()) {
			VideoModel existingVideo = optionalVideo.get();

			if (video.getDescripcion() != null) {
				existingVideo.setDescripcion(video.getDescripcion());
			}

			if (video.getUrlVideo() != null) {
				existingVideo.setUrlVideo(video.getUrlVideo());
			}

			if (video.getCantMegusta() != null) {
				existingVideo.setCantMegusta(video.getCantMegusta());
			}
			if (video.getCantVistas() != null) {
				existingVideo.setCantVistas(video.getCantVistas());
			}
			if (video.getCategoria() != null) {
				existingVideo.setCategoria(video.getCategoria());
			}
			if (video.getTitulo() != null) {
				existingVideo.setTitulo(video.getTitulo());
			}
			if (video.getTotalEstrellas() != null) {
				existingVideo.setTotalEstrellas(video.getTotalEstrellas());
			}
			return Optional.of(videoRepository.save(existingVideo));
		} else {
			return Optional.empty();
		}
	}

	public Optional<VideoModel> deleteVideo(Integer id) {
		Optional<VideoModel> optionalVideo = getVideoById(id);

		if (optionalVideo.isPresent()) {
			videoRepository.deleteById(id);
		}

		return optionalVideo;
	}
	
	private String formatUrl(String url) {
	    if (url.contains("/watch?v=")) {
	        String[] parts = url.split("/watch\\?v="); // Use \\ to escape ? in regex
	        return parts[0] + "/embed/" + parts[1];
	    } else if (url.contains("youtu.be/")) {  // Handle shortened URLs
	        String[] parts = url.split("youtu.be/");
	        return "https://www.youtube.com/embed/" + parts[1];
	    } else {
	        return url;
	    }
	}

}