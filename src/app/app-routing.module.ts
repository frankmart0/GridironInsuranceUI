import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsuredComponent } from './insured/insured.component';

const routes: Routes = [
  {path: 'insureds', component: InsuredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
