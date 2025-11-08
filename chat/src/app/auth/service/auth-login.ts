import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLogin {

      public readonly usuario = new BehaviorSubject<User | null>(null);


   constructor(private auth: Auth, private firestore: Firestore) {}

  register(email: string, password: string) {
    const  usuario = from(createUserWithEmailAndPassword(this.auth, email, password));
    return usuario;
  }

  login(email: string, password: string) {
    const usuarioLogado = from(signInWithEmailAndPassword(this.auth, email, password));
    usuarioLogado.subscribe({
      next: (userCredential) => {
        this.salvarUsuarioFirestore(userCredential.user);
      }
    });
    return usuarioLogado;
  }

  logout() {
    return from(signOut(this.auth));
  }

  get currentUser$(): Observable<User | null> {
    return from(Promise.resolve(this.auth.currentUser ?? null)) as Observable<User | null>;
  }

  get isAuthenticated$(): Observable<boolean> {
    return from(Promise.resolve(!!this.auth.currentUser)) as Observable<boolean>;
  }

    private async salvarUsuarioFirestore(user: User) {
    const ref = doc(this.firestore, `usuarios/${user.uid}`);
    await setDoc(ref, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      lastLogin: new Date()
    }, { merge: true });
  }
}
