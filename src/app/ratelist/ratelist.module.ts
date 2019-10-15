import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RateListPage } from './ratelist.page';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: RateListPage
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
  declarations: [RateListPage]
})
export class RateListPageModule {}
