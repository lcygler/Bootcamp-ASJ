import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Task } from '../../models/ITask';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  filter: string = 'All';

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.apiService.getAllTasks().subscribe((res: Task[]) => {
      this.tasks = res;
      console.log(res);
    });
  }

  patchTask(id: number, task: Partial<Task>) {
    this.apiService.patchTask(id, task).subscribe((res) => {
      this.getAllTasks();
    });
  }

  addTask() {
    const isEmpty = this.newTask.trim() === '';

    if (!isEmpty) {
      const task = {
        description: this.newTask,
        date: new Date(),
        done: false,
        deleted: false,
      };

      this.apiService.createTask(task).subscribe((res) => {
        this.newTask = '';

        if (this.filter === 'Done' || this.filter === 'Deleted') {
          this.filter = 'All';
        }

        this.getAllTasks();
      });
    }
  }

  completeTask(task: Task) {
    if (task.id) {
      this.patchTask(task.id, { done: !task.done });
    }
  }

  editTask(task: Task) {
    if (!task.id) {
      return;
    }

    const newDescription = prompt(
      'Enter the new task description:',
      task.description
    );

    if (newDescription && newDescription.trim() !== '') {
      const updatedTask = { ...task, description: newDescription };
      this.patchTask(task.id, updatedTask);
    } else {
      alert('Please enter a task description.');
    }
  }

  deleteTask(task: Task) {
    if (!task.id) {
      return;
    }

    const isConfirmed = confirm(
      task.deleted
        ? 'Are you sure you want to permanently delete this task?'
        : 'Are you sure you want to delete this task?'
    );

    if (isConfirmed) {
      if (!task.deleted) {
        // Soft Delete
        this.patchTask(task.id, { deleted: true });
      } else {
        // Hard Delete
        this.apiService.deleteTask(task.id).subscribe((res) => {
          this.getAllTasks();
        });
      }
    }
  }

  recoverTask(task: Task) {
    if (task.id) {
      this.patchTask(task.id, { deleted: false });
    }
  }

  clearAllTasks() {
    const isConfirmed = confirm('Are you sure you want to clear all tasks?');

    if (isConfirmed) {
      this.apiService.clearAllTasks().subscribe((res) => {
        this.filter = 'All';
        this.getAllTasks();
      });
    }
  }

  deleteAllTasks() {
    const isConfirmed = confirm(
      'Are you sure you want to permanently delete all tasks?'
    );

    if (isConfirmed) {
      this.apiService.deleteAllTasks().subscribe((res) => {
        this.filter = 'All';
        this.getAllTasks();
      });
    }
  }

  showClearAllBtn(): boolean {
    const hasUndeletedTasks: boolean = this.tasks.some((task) => !task.deleted);
    const notDeletedFilter: boolean = this.filter !== 'Deleted';
    return hasUndeletedTasks && notDeletedFilter;
  }

  showDeleteAllBtn(): boolean {
    const hasDeletedTasks: boolean = this.tasks.some((task) => task.deleted);
    const deletedFilter: boolean = this.filter === 'Deleted';
    return hasDeletedTasks && deletedFilter;
  }

  updateFilter(selectedFilter: string) {
    this.filter = selectedFilter;
  }

  getFilteredTasks(): any[] {
    let filteredTasks: any[] = [...this.tasks];

    switch (this.filter) {
      case 'All':
        filteredTasks = filteredTasks.filter((task) => !task.deleted);
        break;

      case 'Pending':
        filteredTasks = filteredTasks.filter(
          (task) => !task.done && !task.deleted
        );
        break;

      case 'Done':
        filteredTasks = filteredTasks.filter(
          (task) => task.done && !task.deleted
        );
        break;

      case 'Deleted':
        filteredTasks = filteredTasks.filter((task) => task.deleted);
        break;
    }

    return filteredTasks.reverse();
  }
}
