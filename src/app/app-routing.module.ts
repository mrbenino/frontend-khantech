import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
