import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsOfConditionsPage } from './terms-of-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: TermsOfConditionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermsOfConditionsPage]
})
export class TermsOfConditionsPageModule {}
