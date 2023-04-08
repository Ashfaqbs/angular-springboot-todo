package com.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodosService {
	int c=50;
	public static ArrayList<Todos> todoslist = new ArrayList<>();

	static {

		todoslist.add(new Todos(1, "ashu", "dance", new Date(), true));
		todoslist.add(new Todos(2, "sonu", "chess", new Date(), true));
		todoslist.add(new Todos(3, "Monu", "game", new Date(), true));
		todoslist.add(new Todos(4, "Chintu", "karate", new Date(), true));
		todoslist.add(new Todos(5, "dewy", "dance", new Date(), true));
		todoslist.add(new Todos(6, "senu", "game", new Date(), true));
		todoslist.add(new Todos(7, "pinky", "karate", new Date(), true));
		todoslist.add(new Todos(8, "dunga", "dance", new Date(), true));

	}

	public List<Todos> getAllTodos() {
		return todoslist;
	}

	Todos findByID(long id) {
		for (Todos todos : todoslist) {
			if (id == todos.getId())
				return todos;
		}

		return null;
	}

	public Todos deleteById(long id) {

		Todos todo = findByID(id);
		if (todo != null)
			todoslist.remove(todo);

		return todo;
	}

	public Todos updateById(long id, Todos todo) {

		Todos todo1 = findByID(id);
		if (todo != null)
			todo1 = todo;

		return todo;
	}

	public Todos saveTodo(Todos todo) {
		if (todo.getId() == -1 || todo.getId()==0) {
			todo.setId(++c);
			todoslist.add(todo);
		} else {
			deleteById(todo.getId());
			todoslist.add(todo);
		}
		return todo;
	}

}
