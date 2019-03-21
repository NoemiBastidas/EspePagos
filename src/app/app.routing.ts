import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FaqComponent } from 'app/faq/faq.component';
import { CancelarComponent } from 'app/cancelar/cancelar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: InicioComponent,
  }, {
    path: '',
    component: LoginComponent,

    // children: [
    //   {
    //     path: '',
    //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    //   }],
      // runGuardsAndResolvers: 'always',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: CancelarComponent,
  },
  {
    path: '',
    component: FaqComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
