import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { AppRoutingModule } from './app-routing-module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { App } from './app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      ripple: true,
    }),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCnHNFl68A4pUCKj1yW5C8xycT6S7VWCjo',
        authDomain: 'chat-ee58b.firebaseapp.com',
        projectId: 'chat-ee58b',
        storageBucket: 'chat-ee58b.firebasestorage.app',
        messagingSenderId: '185485401151',
        appId: '1:185485401151:web:d42c650ae553fab812ec8a',
        measurementId: 'G-KFRHPVVBBZ',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [App],
})
export class AppModule {}
