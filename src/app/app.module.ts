import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { firebaseConfig } from './config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';

import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MeComponent } from './me/me.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UserPageComponent },
  { path: 'me', component: MeComponent }
];

@NgModule({
  declarations: [AppComponent, HomePageComponent, NavbarComponent, UserPageComponent, MeComponent, UserComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
