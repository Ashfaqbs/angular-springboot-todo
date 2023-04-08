package com.demo.todo;

import java.net.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.RequestEntity.HeadersBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.ServerRequest.Headers;

@CrossOrigin("http://localhost:4200/")
@RestController
public class TodosController {

	@Autowired
	private TodosService service;

	// ALL todos
	@GetMapping("/todos")
	public List<Todos> getTodos() {

		return this.service.getAllTodos();
	}

	// All todos by username
	@GetMapping("/todos/{name}/todos")
	public List<Todos> getTodosbyName(@PathVariable("name") String name) {

		int c = 0;
		System.out.println("Service Called" + c++);
		return this.service.getAllTodos();
	}

	@DeleteMapping("/todos/{name}/todos/{id}")
	public ResponseEntity<Todos> deleteById(@PathVariable("name") String name, @PathVariable("id") long id) {
		System.out.println("SErvice called");
		Todos deleteById = this.service.deleteById(id);
		if (deleteById != null)
			System.out.println(deleteById + " is deleted");
		return (deleteById != null) ? ResponseEntity.status(HttpStatus.NO_CONTENT).build()
				: ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@PutMapping("/todos/{name}/todos/{id}")
	public ResponseEntity<Todos> UdpateById(@PathVariable("name") String name, @PathVariable("id") long id,@RequestBody Todos todos) {
		Todos todoUpdated = service.saveTodo(todos);
		System.out.println("Put Called"+todos);
		return ResponseEntity.ok(todoUpdated);


	}
	@PostMapping("/todos/{name}/todos")
	public ResponseEntity<Todos> createTodo(@RequestBody Todos todos) {

		service.saveTodo(todos);
		System.out.println("Post called"+ todos);
		
		return new ResponseEntity<Todos>(todos, HttpStatus.CREATED);
	}

	@GetMapping("/todos/{name}/todos/{id}")
	public Todos getTodosbyName(@PathVariable("name") String name, @PathVariable("id") int id) {

		return this.service.findByID(id);
	}

	

}
