import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public panelOpenState = false;
  public isEditEnabled = false;
  public selectedEdit: any;
  public startDate: Date = new Date();  

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('onit');

    console.log(this.getTasks());
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((x) => (this.tasks = x));
    console.log(this.tasks);
  }

  selectedTask?: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log('selected', task.dueDate);
  
  }

  onSave(task: Task): void {
    console.log('selected', task.id);
  }

  onDelete(task: Task): void {
    console.log('selected', task.id);
    this.taskService
      .deleteTask(task.id)
      .subscribe((y) =>
        this.taskService.getTasks().subscribe((x) => (this.tasks = x))
      );
  }

  onEdit(task: Task) {
    this.isEditEnabled = !this.isEditEnabled;
    this.selectedEdit = task.id;
    console.log(this.isEditEnabled);
    console.log(this.selectedEdit);
  }

  display(task: Task) {
    return (
      this.selectedEdit !== task.id ||
      (this.selectedEdit === task.id && !this.isEditEnabled)
    );
  }

  // onEdit(task: Task): void {
  //   console.log("selected", task.id)
  //   this.taskService.deleteTask(task.id).subscribe((y) =>
  //     this.taskService.getTasks().subscribe((x) => (this.tasks = x))
  //     );
}
