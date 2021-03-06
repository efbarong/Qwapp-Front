import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // },
  { path: 'login', loadChildren: './views/login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './views/register/register.module#RegisterPageModule' },
  { path: 'perfil', loadChildren: './views/perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard] },
  { path: 'perfil-edit', loadChildren: './views/perfil-edit/perfil-edit.module#PerfilEditPageModule', canActivate: [AuthGuard] },
  { path: 'producto', loadChildren: './views/producto/producto.module#ProductoPageModule', canActivate: [AuthGuard] },
  { path: 'producto-edit', loadChildren: './views/producto-edit/producto-edit.module#ProductoEditPageModule', canActivate: [AuthGuard] },
  { path: 'chat-lista', loadChildren: './views/chat-lista/chat-lista.module#ChatListaPageModule', canActivate: [AuthGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'chat-mensajes/:name', loadChildren: './views/chat-mensajes/chat-mensajes.module#ChatMensajesPageModule', canActivate: [AuthGuard] },
  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule', canActivate: [AuthGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'producto-create/:id', loadChildren: './views/producto-create/producto-create.module#ProductoCreatePageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './views/home/home.module#HomePageModule', canActivate: [AuthGuard]},
  { path: 'intercambio', loadChildren: './views/intercambio/intercambio.module#IntercambioPageModule', canActivate: [AuthGuard] },
  // tslint:disable-next-line: max-line-length
  { path: 'iresume', loadChildren: './views/intercambio-resume/intercambio-resume.module#IntercambioResumePageModule', canActivate: [AuthGuard] },
  { path: 'proceso-list', loadChildren: './views/proceso-list/proceso-list.module#ProcesoListPageModule' ,canActivate: [AuthGuard]},
  { path: 'proceso-resume', loadChildren: './views/proceso-resume/proceso-resume.module#ProcesoResumePageModule', canActivate: [AuthGuard]}






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
