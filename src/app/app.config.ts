import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCql4LqrFHfqDh_F8rE-NgS_lC3hlsQG1E",
  authDomain: "extreme-torch-424713-g5.firebaseapp.com",
  projectId: "extreme-torch-424713-g5",
  storageBucket: "extreme-torch-424713-g5.appspot.com",
  messagingSenderId: "104769806924",
  appId: "1:104769806924:web:fce7474e8ce38df8494ae9",
  measurementId: "G-2LZQ3KP0SS"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};

// This is a new line of code 