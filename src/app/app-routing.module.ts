import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  { path: 'login', loadChildren: './views/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './views/register/register.module#RegisterPageModule' },
  { path: 'perfil', loadChildren: './views/perfil/perfil.module#PerfilPageModule' },
  { path: 'perfil-edit', loadChildren: './views/perfil-edit/perfil-edit.module#PerfilEditPageModule' },
  { path: 'producto', loadChildren: './views/producto/producto.module#ProductoPageModule' },
  { path: 'producto-edit', loadChildren: './views/producto-edit/producto-edit.module#ProductoEditPageModule' },
  { path: 'chat-lista', loadChildren: './views/chat-lista/chat-lista.module#ChatListaPageModule' },
  { path: 'chat-mensajes', loadChildren: './views/chat-mensajes/chat-mensajes.module#ChatMensajesPageModule' },  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
