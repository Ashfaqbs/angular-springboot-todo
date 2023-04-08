import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthService {
  //  this is a class where we have provided auth logic which takes username and password if correct return true else false
  // but the logic is hardcoded i.e user and password must be that ashu and dummy
  // i.e why we created a service , like interface in java we can inject or use it anywhere
//to use this any other component i.e in their .ts file we have to use Dependency injection and @injectable will make this component available for
// dependency injection 
//ng generate service authorization. just like creating some interface to use its service
//now we will remove the login logic from login component and use this logic instead , so we will have loose coupling
//add this class in the login component and import
  constructor() {}

  authenticate(user: any, password: any) {
  //  console.log('before',this. isUseravailable())
    
    if (user === 'ashu' && password === 'dummy') {
      // Session storage is browser object which stores data in key and value pair ,and when we session exists , 
      // i.e the browser tab exists the data will be there and if session is closed , the data is lost,
      // this data we passed can be seen in >inspect>application >session storage
      sessionStorage.setItem('authenticatedUser', user);
      // console.log('after',this. isUseravailable())
      return true;
    } else {
      
  
      return false;
    }
  }

isUseravailable()
{

  let user = sessionStorage.getItem('authenticatedUser');


return !(user===null);
console.log(user===null)
}

logout()
{
 //logout logic just deleting user from session storage  
  let user = sessionStorage.removeItem('authenticatedUser');
}









}
