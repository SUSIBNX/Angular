import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';
import { TaskModel } from '../model/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 baseUrl:string='http://localhost/TaskService/api/Task/';
  constructor(private _http:Http) { }
  GetAllTask():Observable<TaskModel[]>
  {
    return this._http.get(this.baseUrl+"GetAllTask")
    .map((data:Response)=><TaskModel[]>data.json());
  }
  GetTaskById(taskId:Number):Observable<TaskModel>
  {
    return this._http.get(this.baseUrl+"GetTaskById", { body: taskId})
    .map((data:Response)=><TaskModel>data.json());
  }
  SearchTask(taskModel:TaskModel):Observable<TaskModel[]>
  {
     return this._http.get(this.baseUrl+"SearchTask",{ body: taskModel})
    .map((data:Response)=><TaskModel[]>data.json());
  }
  AddTask(taskModel:TaskModel):Observable<boolean>
  {
     return this._http.post(this.baseUrl+"AddTask",{ body: taskModel})
    .map((data:Response)=><boolean>data.json());
  }
  UpdateTask(taskModel:TaskModel):Observable<boolean>
  {
     return this._http.post(this.baseUrl+"UpdateTask",{ body: taskModel})
    .map((data:Response)=><boolean>data.json());
  }
  DeleteTask(taskId:Number):Observable<boolean>
  {
     return this._http.post(this.baseUrl+"DeleteTask",{ body: taskId})
    .map((data:Response)=><boolean>data.json()); 
  }
  
  
}
