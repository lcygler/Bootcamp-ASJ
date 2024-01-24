import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { Video } from '../../../models/IVideo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  videos: Video[] = [];
  searchTerm: string = '';
  categories: string[] = [
    'Todos',
    'Graciosos',
    'Música',
    'Deporte',
    'Manualidades',
    'Otros',
  ];
  categoryFilter: string = 'Todos';

  constructor(private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos() {
    this.videoService.getAllVideos().subscribe((res: Video[]) => {
      this.videos = res;
      console.log(res);
    });
  }

  addVideo() {
    this.router.navigate(['/videos/add']);
  }

  openVideo(id: number) {
    this.router.navigate([`/videos/${id}`]);
  }

  editVideo(id: number) {
    this.router.navigate([`/videos/edit/${id}`]);
  }

  deleteVideo(id: number) {
    const isConfirmed = confirm(
      'Estás seguro de que deseas eliminar el video?'
    );

    if (isConfirmed) {
      this.videoService.deleteVideo(id).subscribe((res: Video) => {
        this.getAllVideos();
      });
    }
  }

  getThumbnail(url: string): string {
    const separators = ['/watch?v=', '/embed/'];
    let thumbnail = '../../../../assets/thumbnail.jpeg';

    for (const separator of separators) {
      if (url.includes(separator)) {
        let id = url.split(separator)[1];
        id = id.split(/[?&]/)[0]; // Remove params
        thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`;
        break;
      }
    }

    return thumbnail;
  }

  updateFilter(category: string) {
    this.categoryFilter = category;
    console.log(category);
  }
}
