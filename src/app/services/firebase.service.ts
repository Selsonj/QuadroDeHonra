import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { Curso } from '../modal/Curso';
import { Cadeira } from '../modal/Cadeira';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //Para os cursis
  private cursos: Observable<Curso[]>;
  private cursoColletion: AngularFirestoreCollection<Curso>;

  //Para as cadeiras
  private curcadeiras: Observable<Cadeira[]>;
  private cadeiraColletion: AngularFirestoreCollection<Cadeira>;

  constructor(private afs: AngularFirestore) { 

    // Definir a colecao
    this.cursoColletion = this.afs.collection<Curso>('cursos');
    
    // Pega os dados da colecao
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

  getCursos(): Observable<Curso[]>{
    return this.cursos;
  }

  // Pegando um curso
  getCurso(id: string): Observable<Curso> {
    return this.cursoColletion.doc<Curso>(id).valueChanges().pipe(
      take(1),
      map(curso => {
        curso.id = id;
        return curso;
      })
    );
  }

  // Criar um novo curso
  addCurso(curso: Curso): Promise<DocumentReference> {
    return this.cursoColletion.add(curso);
  }

  // Atualizar curso
  updateCurso(curso: Curso): Promise<void> {
    return this.cursoColletion.doc(curso.id).update({nome: curso.nome});
  }

  // Apagar Curso
  deleteCurso(id: string): Promise<void> {
    return this.cursoColletion.doc(id).delete();
  }

  // Criar uma nova cadeira
  addCadeira(curso: Curso): Promise<DocumentReference> {
    return this.cursoColletion.add(curso.id);
  }

}
