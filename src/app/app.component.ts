import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public userService:UserService){ }
  ngOnInit(){
    const token:string=localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
    .subscribe(
      res=>this.userService.setUser(res),
      error=>console.log(error)
    )
  }
}
