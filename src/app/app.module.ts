import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { MathsComponent } from './maths/maths.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ContactusComponent,
    LoginComponent,
    ContentComponent,
    ContentDetailsComponent,
    MathsComponent,
    PhysicsComponent,
    ChemistryComponent,
    FooterComponent,
    PagenotfoundComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
