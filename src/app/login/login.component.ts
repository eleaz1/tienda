import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    'correo': '',
    'userPassword': ''
  };

  loginError: String = '';

  constructor(public router: Router, public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  loginWithEmailAndPassword() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.correo, this.usuario.userPassword)
      .then(res => {
        console.log('logueado satisfactoriamente');
        this.goToHome();
      })
      .catch(error => {
        this.loginError = 'Error al iniciar sesión';
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
