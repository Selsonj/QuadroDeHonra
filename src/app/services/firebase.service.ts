import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { Curso } from '../modal/Curso';
import { Rank } from '../modal/Rank';
import { Cadeira } from '../modal/Cadeira';
import { User } from '../modal/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //Para os cursos
  private cursos: Observable<Curso[]>;
  private cursoColletion: AngularFirestoreCollection<Curso>;

  //Para as cadeiras
  private cadeiras: Observable<Cadeira[]>;
  private cadeiraColletion: AngularFirestoreCollection<Cadeira>;

  //Para os usuarios
  private users: Observable<User[]>;
  private userColletion: AngularFirestoreCollection<User>;

  //Para o ranking
  private ranks: Observable<Rank[]>;
  private rankColletion: AngularFirestoreCollection<Rank>;

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

    // Definir a colecao rank
    this.rankColletion = this.afs.collection<Rank>('ranking');
    
    // Pega os dados da colecao rank
    this.ranks = this.rankColletion.snapshotChanges().pipe(
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

  getRanks(): Observable<Rank[]>{
    return this.ranks;
  }
  ///////////////////////////

  
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
  addCadeira(cadeira: Cadeira, id: string): Promise<DocumentReference> {
    
    // Definir a colecao
    this.cadeiraColletion = this.afs.collection<Cadeira>('cursos/'+id+'/cadeira');
    return this.cadeiraColletion.add(cadeira);
  }

  // Pega cadeiras
  getCadeiras(id:string): Observable<Cadeira[]>{

     // Pega os dados da colecao cadeiras
     this.cadeiraColletion = this.afs.collection<Cadeira>('cursos/'+id+'/cadeira');
     this.cadeiras = this.cadeiraColletion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );    
    return this.cadeiras;
  }

  // Pega estudantes
  getUsers(id:string): Observable<User[]>{

    // Pega os dados da colecao users
    this.userColletion = this.afs.collection<User>('cursos/'+id+'/users');
    this.users = this.userColletion.snapshotChanges().pipe(
     map(actions => {
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return {id, ...data};
       });
     })
   );
     
   return this.users;
 }

/*
 getRank()
 {
   // Pega os dados da colecao users
   this.userColletion = this.afs.collection<User>("ranking");
   this.users = this.userColletion.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    })
    //return await userColletion.orderBy('media').limit(3).get();
  //const firstThreeRes = await userColletion.orderBy('media').limit(3).get();
 }*/

  cadastra(user: User, id:string): Promise<DocumentReference>
  {
    // Definir a colecao
    this.userColletion = this.afs.collection<User>("cursos/"+id+"/users");
    console.log("cursos/"+id+"/users");
    return this.userColletion.add(user);
  }
  
}