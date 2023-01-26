import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmComponent } from './bpm/bpm.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'bpm', component: BpmComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'bpm', pathMatch: 'full' },
  { path: '**', redirectTo: 'bpm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
