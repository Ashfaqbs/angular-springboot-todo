import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //import path

class Greeting {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomedataService {
  constructor(private httpclient: HttpClient) {}
  // HttpClient is a module we can call any type of http Request like (get ,put, delete, post)
  //to use it make it a data member in the class

  caller = 'sonu';

  hellowWroldService() {
    let basicAuthHeaderString = this.createBasicAuthBasicHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.httpclient.get<Greeting>('http://localhost:8080/greet1',{headers});
  }
  hellowWroldService2() {
    let basicAuthHeaderString = this.createBasicAuthBasicHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    //calling  a api with path varaible 1 by concatinating
    return this.httpclient.get<Greeting>( 
      'http://localhost:8080/greet1/' + this.caller,{headers}
    );
    // or using backticks
    // return this.httpclient.get<Helloworld>(`http://localhost:9000/helloWorldobj/${this.caller}`);
  }

  createBasicAuthBasicHeader() {
    //as we have used basic auth in springboot that username and password we will put in this function and return in the headers og the request
    let username = 'user';
    let password = 'dummy';
    //encoding the basic auth string
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':'+ password);
    return basicAuthHeaderString;
    //we will call in the above requests
  }
}
