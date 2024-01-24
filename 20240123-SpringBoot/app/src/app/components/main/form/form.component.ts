import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { VideoService } from 'src/app/services/video.service';
import { Video } from '../../../models/IVideo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  video: Video = {
    urlVideo: '',
    categoria: '',
    titulo: '',
    descripcion: '',
    cantVistas: 0,
    cantMegusta: 0,
    totalEstrellas: 0,
  };

  categories: string[] = [
    'Todos',
    'Graciosos',
    'Música',
    'Deporte',
    'Manualidades',
    'Otros',
  ];

  videoId: number | null = null;
  isEditView: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideoService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('videoId');

    if (id) {
      this.videoId = parseInt(id);
      this.getVideoById(this.videoId);
      this.isEditView = this.isEditRoute();
    }
  }

  getVideoById(id: number): void {
    if (id) {
      this.videoService.getVideoById(id).subscribe((res) => {
        this.video = res;
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.error('El formulario contiene errores.');
      return;
    }

    const formData = form.value;

    if (formData.urlVideo.includes('/watch?v=')) {
      const parts = formData.urlVideo.split('/watch?v=');
      formData.urlVideo = `${parts[0]}/embed/${parts[1]}`;
    }

    const video: Video = {
      urlVideo: formData.urlVideo.trim(),
      categoria: formData.categoria.trim(),
      titulo: formData.titulo.trim(),
      descripcion: formData.descripcion.trim(),
      cantVistas: formData.cantVistas,
      cantMegusta: formData.cantMegusta,
      totalEstrellas: formData.totalEstrellas,
    };

    if (this.isEditRoute()) {
      this.videoService.updateVideo(this.video.id!, video).subscribe((res) => {
        this.notificationService.showSuccessMsg(
          'Video modificado correctamente!'
        );
      });
    } else {
      this.videoService.createVideo(video).subscribe((res) => {
        this.notificationService.showSuccessMsg(
          'Video agregado correctamente!'
        );
      });
    }

    form.reset();
    this.router.navigate(['/videos']);
  }

  isEditRoute(): boolean {
    const route = this.router.url;
    return route.includes('/videos/edit');
  }
}
