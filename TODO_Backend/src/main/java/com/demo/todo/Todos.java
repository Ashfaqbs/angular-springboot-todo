package com.demo.todo;

import java.util.Date;
import java.util.Objects;

public class Todos {

	private long id;

	private String username;
	private String desc;
	private Date targetDate;
	private boolean isDone;
	public Todos(long id, String username, String desc, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.desc = desc;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	public Todos() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Todos [id=" + id + ", username=" + username + ", desc=" + desc + ", targetDate=" + targetDate
				+ ", isDone=" + isDone + "]";
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todos other = (Todos) obj;
		return id == other.id;
	}




}
