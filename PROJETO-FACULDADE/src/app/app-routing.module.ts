import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/content/content.component';
import { CadastroBaseComponent } from 'src/app/cadastro-base/cadastro-base.component';

const Routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro', component: CadastroBaseComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
