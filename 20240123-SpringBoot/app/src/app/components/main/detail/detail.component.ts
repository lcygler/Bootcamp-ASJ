import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { Video } from '../../../models/IVideo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  video: Video = {
    urlVideo: '',
    categoria: '',
    titulo: '',
    descripcion: '',
    cantVistas: 0,
    cantMegusta: 0,
    totalEstrellas: 0,
  };

  avgScore = 0;
  viewAdded = false;
  starRate = [1, 2, 3, 4, 5];
  chosenRate = 0;
  videoId: number | null = null;
  videoIndex: number | null = null;
  videos: Video[] = [];
  currentHoverStar: number = 0;

  constructor(
    private videoService: VideoService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.paramMap.get('videoId');

      if (id) {
        this.videoId = parseInt(id);
        this.getVideoById(this.videoId);
      }
    });

    this.videoService.getAllVideos().subscribe((res) => {
      this.videos = res;
      this.videoIndex = this.videos.findIndex((v) => v.id === this.videoId);
    });
  }

  getVideoById(id: number): void {
    if (id) {
      this.videoService.getVideoById(id).subscribe((res) => {
        this.video = res;

        if (res.cantMegusta != 0) {
          this.avgScore = res.totalEstrellas / res.cantMegusta;
        }

        this.addAView(id);
      });
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  addAView(id: number) {
    this.videoService
      .patchVideo(id, { cantVistas: this.video.cantVistas + 1 })
      .subscribe((res) => {
        this.video = res;
      });
  }

  // Star Rating
  setRate(star: number) {
    if (this.chosenRate == 0 && this.videoId != null) {
      this.chosenRate = star;

      this.videoService
        .patchVideo(this.videoId, {
          totalEstrellas: this.video.totalEstrellas + this.chosenRate,
          cantMegusta: this.video.cantMegusta + 1,
        })
        .subscribe((res: Video) => {
          this.video = res;

          if (res.cantMegusta != 0) {
            this.avgScore = res.totalEstrellas / res.cantMegusta;
          }
        });
    }
  }

  onMouseOver(star: number) {
    if (this.chosenRate == 0) {
      this.currentHoverStar = star;
    }
  }

  onMouseOut(star: number) {
    if (this.chosenRate == 0) {
      this.currentHoverStar = 0;
    }
  }

  // Navigation
  prevVideo() {
    if (this.videoIndex !== null && this.videoIndex - 1 >= 0) {
      const id = this.videos[this.videoIndex - 1].id;

      this.router.navigate(['/videos/' + id]).then(() => {
        this.videoIndex = this.videoIndex! - 1;
        this.resetView();
      });
    }
  }

  nextVideo() {
    if (this.videoIndex !== null && this.videoIndex + 1 < this.videos.length) {
      const id = this.videos[this.videoIndex + 1].id;

      this.router.navigate(['/videos/' + id]).then(() => {
        this.videoIndex = this.videoIndex! + 1;
        this.resetView();
      });
    }
  }

  resetView() {
    this.chosenRate = 0;
    this.currentHoverStar = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
