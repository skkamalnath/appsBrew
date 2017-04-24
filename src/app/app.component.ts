import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent }     from './about/about-us.component';
import { RegisterComponent }     from './register/register.component';
import { ContactComponent }     from './contact/contact.component';
import { NotFoundComponent }     from './not-found.component';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
