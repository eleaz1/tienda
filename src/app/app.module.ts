import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { NavbarModule } from './navbar/navbar.module';

export const firebaseConfig = {
  apiKey: "AIzaSyC6XBNImLuarYPhu68Gf2TDfoIH6IYTC_Q",
  authDomain: "tienda-b1bc9.firebaseapp.com",
  databaseURL: "https://tienda-b1bc9.firebaseio.com",
  projectId: "tienda-b1bc9",
  storageBucket: "tienda-b1bc9.appspot.com",
  messagingSenderId: "200226156339"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HomeModule,
    LoginModule,
    Angular2FontawesomeModule,
    NavbarModule,
    AppRoutingModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}
