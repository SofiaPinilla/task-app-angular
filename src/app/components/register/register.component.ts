import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public message:string
  constructor(public userService:UserService,public router:Router) { }
  

  ngOnInit(): void {
  }
  register(event){
    event.preventDefault();
    const form =event.target;
    const user={
      username:form.username.value,
      email:form.email.value,
      password:form.password.value,
    }
    this.userService.register(user)
    .subscribe(
      res=>{
        console.log(res);
        this.message=res.message;
        setTimeout(() => this.message="", 2500);
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 2500);
      },
      err=>console.error(err)
    )
    event.target.reset();
  }
}
