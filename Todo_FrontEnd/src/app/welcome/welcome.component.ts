import { WelcomedataService } from './../service/data/welcomedata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  apiresponse1 = '';

  error = false;
  apiresponse2 = '';

  constructor(private helloService: WelcomedataService) {}
  // Calling API 1  -start////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // getWelcomeMessage() pass this function to a butoon as onlcik in WelcomeComponent.html and take the data or eroor coming to WelcomeComponent.html
  // if data is there interpolate with vaiable and show in WelcomeComponent.html for error show a error message
  getWelcomeMessage() {
    console.log(this.helloService.hellowWroldService());
    this.helloService.hellowWroldService().subscribe(
      (data) => this.handleSuccessFullResponse1(data), //to handle good response
      (error) => this.handleErrorResponse1(error) // to handle bad response will show the error object we are passing it into a function
    );
  }

  handleErrorResponse1(apierror: any) {
    this.error = true;
    console.log(apierror);
  }
  handleSuccessFullResponse1(response: any) {
    this.apiresponse1 = response.message;
    console.log(response.message);
  }
  // Calling API 1 -end ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getCallername() {
    this.helloService
      .hellowWroldService2()
      .subscribe((data) => this.handleSuccessFullResponse2(data)
      ,
      (error) => this.handleErrorResponse2(error)      
      
      );
  }
  handleSuccessFullResponse2(response: any) {
    this.apiresponse2 = response.message;
    console.log(response.message);
  }
  handleErrorResponse2(apierror: any) {
    
    console.log(apierror.error.message);
  }

}
