import { Todo } from 'src/app/list-todos/list-todos.component';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {



constructor(private todoservice:TodoDataService, private route:ActivatedRoute,private  router :Router )
{

}
id: number = 0  ;
todo: Todo = new Todo(this.id, '', false, new Date());

  ngOnInit(): void {
    this.todo = new Todo(this.id, '', false, new Date());
this.id = this.route.snapshot.params['id'];//assigining the id from url to the dummy id and passing it to the update function
if(this.id!=-1){
  //when u call add todo button it will redirect to todo/-1 by default so if -1 means its a new todo,else existing id will be passed in 
  // url
  
    this.todoservice.updateByIdservice(this.id,'sonu').subscribe(
  data => this.todo=data
)
    }
  }

 saveTodo() {

  if(this.id===-1)//id == -1 means its a new one so we create and redirect it to todos path
  {
this.todoservice.createTodo('sonu',this.todo).subscribe(


  data =>{
    console.log(data)
    this.router.navigate(['todos'])

  }
)

  }
 this.todoservice.updateTodo('sonu',this.id,this.todo).subscribe(

data =>{
  console.log(data)
  this.router.navigate(['todos'])

} 

 )
}
}
