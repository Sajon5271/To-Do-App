import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from './Task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private route: Router) {}

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl + '/create-task', task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + '/all-tasks');
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(this.baseUrl + '/task/' + id);
  }

  deleteTaskById(id: string): Observable<Task> {
    return this.http.delete<Task>(this.baseUrl + '/task/' + id);
  }

  deleteTasks(ids: string[]): Observable<Task> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    return this.http.delete<Task>(this.baseUrl + '/tasks', options);
  }

  setTaskDone(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let tobeUpdated = {};
    this.getTaskById(id).subscribe((res) => (tobeUpdated = res));
    return this.http.put(
      this.baseUrl + '/set-task-done/' + id,
      tobeUpdated,
      httpOptions
    );
  }

  getFilteredTasks(): Observable<Task[]> | undefined {
    let path = this.route.url.split('/');
    const status = path[path.length - 1];

    if (status === 'past') {
      return this.http.get<Task[]>(this.baseUrl + '/tasks/past');
    } else if (status === 'present') {
      return this.http.get<Task[]>(this.baseUrl + '/tasks/present');
    } else if (status === 'upcoming') {
      return this.http.get<Task[]>(this.baseUrl + '/tasks/upcoming');
    } else if (status === 'done') {
      return this.http.get<Task[]>(this.baseUrl + '/tasks/done');
    }
    return undefined;
  }
}
