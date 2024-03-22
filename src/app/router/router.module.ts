import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' }, 
  { path: 'homePage', component: HomePageComponent },
  { path: 'details/:id', component: DetailsComponent  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class RoutingModule { }
