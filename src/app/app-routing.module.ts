import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './core/components/home/home.component';
import { SobreComponent } from './core/components/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home",
  },
  {
    path: 'sobre/:id',
    component: SobreComponent,
    title: "Sobre",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
