import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'minifleet-web-app';
  users$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'main/app/users');
    this.users$ = collectionData(usersCollection);
  }
}
