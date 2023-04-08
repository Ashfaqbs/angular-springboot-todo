package com.demo.greet
;

import java.util.Date;

public class Greeting {


	private String message;
	
	
	public Greeting(String message) {
		super();
		this.message = message;
	}
	public Greeting() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Greeting [message=" + message + "]";
	}
	



}
