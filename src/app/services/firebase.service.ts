import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { Curso } from '../modal/Curso';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private cursos: Observable<Curso[]>;
  private cursoColletion: AngularFirestoreCollection<Curso>;

  constructor(private afs: AngularFirestore) { 

    this.cursoColletion = this.afs.collection<Curso>('cursos');
    this.cursos = this.cursoColletion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
}
