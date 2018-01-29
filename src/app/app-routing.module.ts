import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
const routes: Routes = [
   {path: 'home', component: NavbarComponent},
   {path: 'faq', component: FaqComponent}
   // {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
