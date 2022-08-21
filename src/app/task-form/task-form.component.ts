import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  public startDate: Date = new Date();  

  constructor() { }

  ngOnInit(): void {}
  

   // model = new Task();
  
    submitted = false;
  
    onSubmit() { this.submitted = true; }
  
  
}
