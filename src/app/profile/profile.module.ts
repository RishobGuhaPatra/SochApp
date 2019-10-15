import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ShareModule } from '../share.module';
import { AngularFireDatabase } from 'angularfire2/database';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	RouterModule.forChild(routes),
	ShareModule
  ],
  declarations: [ProfilePage],
  providers : [AngularFireDatabase]
})
export class ProfilePageModule {}
