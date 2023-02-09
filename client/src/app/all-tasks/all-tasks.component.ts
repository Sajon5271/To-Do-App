import { Component } from '@angular/core';
import { Task } from '../Task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent {
  allTasks: Task[] = [];
  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.taskService.getAllTasks().subscribe((res) => (this.allTasks = res));
  }

  deleteTask(id: string | undefined) {
    if (id === undefined) return;
    this.taskService.deleteTaskById(id).subscribe((res) => {
      console.log(res);
      this.allTasks = this.allTasks.filter((elem) => elem._id !== id);
    });
  }
}
