import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  imagesInstrutores=
    [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  

}
