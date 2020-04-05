import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public userService: UserService, public router:Router) { }
 
  ngOnInit(): void {
    const token:string=localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
    .subscribe(
      res=>this.userService.setUser(res),
      error=>console.log(error)
    )
  }

}
