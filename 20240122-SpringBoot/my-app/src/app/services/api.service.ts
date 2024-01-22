import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/ITask';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}`);
  }

  public getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/${id}`);
  }

  public createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.API_URL}`, task);
  }

  public updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${id}`, task);
  }

  public patchTask(id: number, task: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.API_URL}/${id}`, task);
  }

  public clearAllTasks(): Observable<string> {
    return this.http.get(`${this.API_URL}/clear-all`, { responseType: 'text' });
  }

  public deleteAllTasks(): Observable<string> {
    return this.http.get(`${this.API_URL}/delete-all`, {
      responseType: 'text',
    });
  }

  public deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}/${id}`);
  }
}
