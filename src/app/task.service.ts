import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = 'http://localhost:3000/tasks';

  constructor(  private http: HttpClient,) {}


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  deleteTask(id: string): Observable<any> {
    console.log(this.taskUrl+ '/task/'+id);

    const result = this.http.delete<any>(this.taskUrl+ '/task/'+id);
    console.log(result.subscribe());
    return result;
  }
}
