import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'todo',component: TodoComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
