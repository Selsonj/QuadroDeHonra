import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'update-curso/:id',
    loadChildren: () => import('./paginas/update-curso/update-curso.module').then( m => m.UpdateCursoPageModule)
  },
  {
    path: 'add-curso',
    loadChildren: () => import('./paginas/add-curso/add-curso.module').then( m => m.AddCursoPageModule)
  },
  {
    path: 'view-curso/:id',
    loadChildren: () => import('./paginas/view-curso/view-curso.module').then( m => m.ViewCursoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./paginas/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./paginas/user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
