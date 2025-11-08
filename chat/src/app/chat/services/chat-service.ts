import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, query, orderBy, DocumentData } from '@angular/fire/firestore';
import { AuthLogin } from '../../auth/service/auth-login';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

      public readonly usuario = new BehaviorSubject<User | null>(null);

  constructor(private firestore: Firestore, private auth: AuthLogin) {}

    getMensagens(): Observable<any[]> {
    const mensagensRef = collection(this.firestore, 'mensagens');
    const q = query(mensagensRef, orderBy('timestamp'));
    return collectionData(q, { idField: 'id' });
  }

  // getMensagens(conversaId: string): Observable<any[]> {
  //   const mensagensRef = collection(this.firestore, `conversas/${conversaId}/mensagens`);
  //   const q = query(mensagensRef, orderBy('timestamp'));
  //   return collectionData(q, { idField: 'id' });
  // }

    async enviarMensagem(texto: string, usuarioId: string) {
    const mensagensRef = collection(this.firestore, 'mensagens');
    return await addDoc(mensagensRef, {
      texto,
      usuarioId,
      timestamp: new Date()
    });
  }

  // enviarMensagem(conversaId: string, texto: string) {
  //   const mensagensRef = collection(this.firestore, `conversas/${conversaId}/mensagens`);
  //   return addDoc(mensagensRef, {
  //     remetente: this.auth.usuario.value?.uid,
  //     texto,
  //     timestamp: new Date(),
  //   });
  // }
}
