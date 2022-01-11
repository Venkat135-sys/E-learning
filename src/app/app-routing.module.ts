import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathsComponent } from './maths/maths.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhysicsComponent } from './physics/physics.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {path:'register',component:RegisterComponent},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'content',component:ContentComponent ,children:[
      
      {
        path:'maths',component:MathsComponent
      },
      {
        path:'physics',component:PhysicsComponent
      },
      {
        path:'chemistry',component:ChemistryComponent
      }
    ]
  },
  {
    path:'about',component:ContactusComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'**',component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
