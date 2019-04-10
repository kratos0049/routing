import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';



const appRoutes:Routes=[
  {path:'navbar', component:HomeComponent},
  {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
  {path:'newPage',component:PageNotFoundComponent},
  
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}