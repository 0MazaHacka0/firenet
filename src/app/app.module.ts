import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { firebaseConfig } from './firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Providers
import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';

// Pages
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

// Message components
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:uid', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    MessagesComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
