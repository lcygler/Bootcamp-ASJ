import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Video } from '../models/IVideo';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private API_URL = 'http://localhost:8080/videos';

  constructor(private http: HttpClient) {}

  public getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.API_URL}`);
  }

  public getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.API_URL}/${id}`);
  }

  public createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(`${this.API_URL}`, video);
  }

  public updateVideo(id: number, video: Video): Observable<Video> {
    return this.http.put<Video>(`${this.API_URL}/${id}`, video);
  }

  public patchVideo(id: number, video: Partial<Video>): Observable<Video> {
    return this.http.patch<Video>(`${this.API_URL}/${id}`, video);
  }

  public deleteVideo(id: number): Observable<Video> {
    return this.http.delete<Video>(`${this.API_URL}/${id}`);
  }

  public addAView(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.API_URL}/${id}`).pipe(
      map((video) => {
        let videoWithOneMoreView = {
          ...video,
          cantVistas: video.cantVistas + 1,
        };
        return videoWithOneMoreView;
      }),
      switchMap((modifiedVideo) =>
        this.http.put<Video>(`${this.API_URL}/${id}`, modifiedVideo)
      )
    );
  }
}
