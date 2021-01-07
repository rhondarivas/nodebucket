/*
============================================
; Title: NodeBucket
; Author: Professor Krasso
; Date: 12-14-20
; Modified By: Rhonda Rivas
; Description: Node Bucket employee management app
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TaskCreateDialogComponent} from '../../shared/task-create-dialog/task-create-dialog.component';
//componets for the app
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sessionUser: string;
  tasks: any;
  todo: any;
  done: any;
  constructor(private http: HttpClient, private cookieService: CookieService, private dialog: MatDialog) {
    this.sessionUser = this.cookieService.get('session_user'); // this is used to get the current session user
  //connects to the employee api
  this.http.get('/api/employees/' + this.sessionUser + '/tasks').subscribe(res => {
    this.tasks = res;
    this.todo = this.tasks.todo;
    this.done = this.tasks.done;
    console.log(this.tasks);
    console.log(this.todo);
    console.log(this.done);
  }, err => {
    console.log(err);
  });
}
ngOnInit() {
}
/**
   * This creates a new task dialog
   */
  openCreateTaskDialog() {
    const dialogRef = this.dialog.open(TaskCreateDialogComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.http.post('/api/employees/' + this.sessionUser + '/tasks', {
          text: data.text
        }).subscribe(res => {
          this.tasks = res;
          this.todo = this.tasks.todo;
          this.done = this.tasks.done;
        }, err => {
          console.log(err);
        });
      }
    });
  }
  /**
   * This is where we Delete a task 
   */
  deleteTask(taskId) {
    if (taskId) {
      console.log(`Task item: ${taskId} is being removed.`);
      this.http.delete('/api/employees/' + this.sessionUser + '/tasks/' + taskId).subscribe(res => {
        this.tasks = res;
        this.todo = this.tasks.todo;
        this.done = this.tasks.done;
      }, err => {
        console.log(err);
      })
    }
  }
  /**
   * this allows us to Drag-n-drop tasks between the ToDO and Done columns
   */
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateTasks(this.todo, this.done).subscribe(res => {
        this.tasks = res;
        this.todo = this.tasks.todo;
        this.done = this.tasks.done;
      }, err => {
        console.log('Error saving update tasks');
        console.log(err);
      });
      console.log('Moved task in existing column');
      console.log(this.todo);
      console.log(this.done);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.updateTasks(this.todo, this.done).subscribe(res => {
        this.tasks = res;
        this.todo = this.tasks.todo;
        this.done = this.tasks.done;
      }, err => {
        console.log('Error saving update tasks');
        console.log(err);
      });
      console.log('Moved tasks to a new column');
      console.log(this.todo);
      console.log(this.done);
    }
  }
/**
   * This is a Reusable API for task updates
   * @Returns: An Array of tasks (todo; done) by employeeId
   */
  updateTasks(todo, done) {
    return this.http.put('/api/employees/' + this.sessionUser + '/tasks', {
      todo,
      done
    });
  }
}
