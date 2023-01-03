import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string="Hello Bangtan";
name:string="Jungkook";
age:number=25;
handleSubmitBtn(){
this.name="Jimin";
this.age=27;
}


}
