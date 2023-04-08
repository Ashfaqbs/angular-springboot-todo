import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { WelcomeComponent } from './../welcome/welcome.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 //using data binding
username='ashu'
password=''
// error=''

// trues=false;
invalid=false;
valid=false;
error='invalid login'; 


//Dependency injection  for Router so we can use it in this class to use its navigate functionality
constructor(  private router:Router, private HardcodedAuthService:HardcodedAuthService   )
{

}

 d = document.getElementsByTagName("input");
 

  login():void  {
  // console.log(this.username, "Login");
  // console.log( this.d[0].value);
  // console.log( this.d[1].value);
this.username =this.d[0].value;
console.log(this.username)
this.password =this.d[1].value;


if(this.HardcodedAuthService.authenticate(this.username, this.password))//logic from auth service
{
 this.invalid=false;
 this.valid=true;
 alert("Authentication Success");
//if true then we will redirect to welcome Component i.e WelcomeComponent.html
 this.router.navigate(['welcome']) //now if the condition is true it will navigate to the welcome route it must be same as specified  
this.error='login successfull'; 
}else{
 alert("invalid CRED")
  
 this.invalid=true;
}



//this is login logic and now we will use auth service logic
// if(this.username==='ashu'&&this.password==='dummy')
// {
//   this.invalid=false;
// //if true then we will redirect to welcome Component i.e WelcomeComponent.html
//  this.router.navigate(['welcome' ]) //now if the condition is true it will navigate to the welcome route it must be same as specified  


// }
// else{
//   alert("invalid CRED")
  
// this.invalid=true;
// }

  }

}

 


 
