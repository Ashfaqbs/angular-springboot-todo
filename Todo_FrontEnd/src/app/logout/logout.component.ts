import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  implements OnInit {



constructor( public HardcodedAuthService :  HardcodedAuthService)
{

}
 

ngOnInit(): void {
    this.HardcodedAuthService.logout();
}



}
