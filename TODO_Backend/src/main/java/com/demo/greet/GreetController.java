package com.demo.greet;

import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200/")
@RestController
public class GreetController {


	
	@GetMapping("/")
	public String defaultMap()
	{
		
		return "Hello to Todo servcie";
	}
	
	
	@GetMapping("/greet1")
	public Greeting greetings1()
	{
		
		return new Greeting("Hello There");
	}
	
	
	@GetMapping("/greet1/{name}")
	public Greeting greetings1(@PathVariable("name") String name)
	{
		
		return new Greeting("Hello There" +name);
	}
	
	
}
