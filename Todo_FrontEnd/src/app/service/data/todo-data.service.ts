import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import path
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
 
  constructor(private httpclient: HttpClient) {}
  // HttpClient is a module we can call any type of http Request like (get ,put, delete, post)
  //to use it make it a data member in the class

  retrieveAllTodos(username: String) {
    return this.httpclient.get<Todo[]>(
      `http://localhost:8080/todos/${username}/todos`
    );
    console.log(this.httpclient.get<Todo>('http://localhost:8080/Todos'));
  }


  deleteByIdservice(id: number, name: string) {
  return this.httpclient.delete(`http://localhost:8080/todos/${name}/todos/${id}`);
  }

  updateByIdservice(id: number, name: string) {
    return this.httpclient.get<Todo>(`http://localhost:8080/todos/${name}/todos/${id}`);
    }


    createTodo(username: string, todo: Todo) {
      console.log('added',todo)
      return this.httpclient.post(
      
        `http://localhost:8080/todos/${username}/todos`
        ,todo);
    }


    // @PutMapping("/todos/{name}/todos/{id}")
    updateTodo(username: string, id: number, todo: Todo) {
      return this.httpclient.put<Todo>(
        `http://localhost:8080/todos/${username}/todos/${id}`,todo);
    }
}
