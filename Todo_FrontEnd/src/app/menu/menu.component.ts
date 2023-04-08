import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

isUser :boolean = false;



constructor(public hardcodedAuthService:HardcodedAuthService)
{


}


ngOnInit()
{
  this.isUser= this.hardcodedAuthService.isUseravailable();
 console.log(this.isUser);
 
}



}
