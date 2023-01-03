import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

UserName:string="";
Password:string="";
Confirmpassword:string="";
Gender:string="";
country:string="";
Msg:string="";

CheckLogin(){
  
  if(this.UserName=="admin" && this.Password=="admin123")
     this.Msg="Valid Credintials";
      else
      this.Msg="invalid Credintials"


}



}
