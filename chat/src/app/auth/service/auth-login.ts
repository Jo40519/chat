import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLogin {

   constructor(private auth: Auth) {}

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  get currentUser$() {
    return this.auth.currentUser
      ? from(Promise.resolve(this.auth.currentUser))
      : from(Promise.resolve(null));
  }

  get isAuthenticated$() {
    return from(Promise.resolve(!!this.auth.currentUser));
  }
}
