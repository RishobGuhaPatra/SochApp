import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PINPage } from './pin.page';
import { ShareModule } from '../share.module';
import { AngularFireDatabase } from 'angularfire2/database';

const routes: Routes = [
  {
    path: '',
    component: PINPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PINPage]
})
export class PINPageModule {}
