import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';

export class Todo{

  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
  
  }
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})




export class ListTodosComponent  implements OnInit {


  constructor(
 private todoservice:TodoDataService  , private  router :Router 
  ) { }


  ngOnInit() {
 this.refreshTodos();
  }

  refreshTodos()
  {
    this.todoservice.retrieveAllTodos('ashu').subscribe(
      response => {
        console.log(response)
        this.todos=response
      }
     )

  }
//passing Object from listTodos.ts to listTodos.component.html

//single Object
// dummy={
//  'id':1,
//  'name':'Todos1',
//  'description':'car wash',
// }

//List of objects
// dummy5={
//   'id':5,
//   'name':'Todos5',
//   'description':'bike wash',
//  }
//  dummy1={
//   'id':1,
//   'name':'Todos1',
//   'description':'car wash',
//  }
//  dummy2={
//   'id':2,
//   'name':'Todos2',
//   'description':'Dance class ',
//  }
//  dummy3={
//   'id':3,
//   'name':'Todos3',
//   'description':'gym',
//  }
//  dummy4={
//   'id':4,
//   'name':'Todos4',
//   'description':'cycling',
//  }
    //  DummyObjs =[this.dummy1, this.dummy2, this.dummy3, this.dummy4,]

//a variable of todo array type , with empty data
    todos: Todo[] = [];
// call the service functione assign the data to this Variable
    message: string = '';

   name: string ='sonu'
    deleteTodo(id:number)
    {
      console.log('delete todo', id)
      this.todoservice.deleteByIdservice(id,this.name).subscribe(
        data => {console.table(data)

        this.message='successfully deleted'
        this.refreshTodos(); 
      }
        );

    }
 

    updateTodo(id:number)
    {
      console.log('updateTodo',id);
      this.router.navigate(['todos',id ])

    }

    addTodo()
    {
      console.log('Adding Todo');
      this.router.navigate(['todos',-1])
      //-1 so to indicate that user is adding todos
    }


}

