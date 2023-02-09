import { Component } from '@angular/core';
import { Task } from '../Task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  recentTasks: Task[] = [];
  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.taskService
      .getAllTasks()
      .subscribe((res) => (this.recentTasks = res.slice(0, 5)));
  }
}
