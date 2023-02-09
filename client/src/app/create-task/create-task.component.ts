import { Component } from '@angular/core';
import { Task } from '../Task.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  currentTime = '';
  currentDate = '';
  taskForm = this.formBuilder.group({
    taskTitle: ['', Validators.required],
    taskDescription: '',
    taskStartDate: [
      formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
      Validators.required,
    ],
    taskStartTime: [this.getCurrentTime(), Validators.required],
    taskEndDate: formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
    taskEndTime: this.getCurrentTime(),
  });
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService
  ) {}

  ngOnInit() {}

  getCurrentTime() {
    const t = new Date();
    this.currentTime =
      ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
    return this.currentTime;
  }

  submitData() {
    const newTask: Task = {
      taskTitle: this.taskForm.value.taskTitle || '',
      taskDescription: this.taskForm.value.taskDescription || '',
      taskStartTime: Date.parse(
        this.taskForm.value.taskStartDate +
          ' ' +
          this.taskForm.value.taskStartTime
      ),
      taskEndTime: Date.parse(
        this.taskForm.value.taskEndDate + ' ' + this.taskForm.value.taskEndTime
      ),
    };
    this.taskService.createTask(newTask).subscribe((res) => console.log(res));
  }
}
