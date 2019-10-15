import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RateCounselorPage } from './rate-counselor.page';

const routes: Routes = [
  {
    path: '',
    component: RateCounselorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RateCounselorPage]
})
export class RateCounselorPageModule {}
