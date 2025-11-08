import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _firestore = inject(Firestore);

    getUsuarios(): Observable<any[]> {
    const ref = collection(this._firestore, 'usuarios');
    return collectionData(ref, { idField: 'id' });
  }
}
