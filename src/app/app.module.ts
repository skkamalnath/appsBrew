import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent }    from './home/home.component';
import { FooterComponent }    from './footer/footer.component';
import { AboutUsComponent }    from './about/about-us.component';
import { RegisterComponent }    from './register/register.component';
import { ContactComponent }    from './contact/contact.component';
import { NotFoundComponent }     from './not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
