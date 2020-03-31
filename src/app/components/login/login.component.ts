import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: string;
  public errorMsg: string;
  constructor(public userService: UserService,public router:Router) { }

  ngOnInit(): void {
  }
  login(event){
    event.preventDefault();
    const form =event.target;
    const user={
      username:form.username.value,
      password:form.password.value,
    }
    this.userService.login(user)
    .subscribe(
      res=>{
        console.log(res);
        this.message=res.message;
        setTimeout(() => this.message="", 2500);
        setTimeout(() => {
          this.router.navigate([''])
        }, 2500);
      },
      err => {
        this.errorMsg = err.error.message
        setTimeout(() => this.errorMsg = "", 2500);
      }
    )
    event.target.reset();
  }
}
