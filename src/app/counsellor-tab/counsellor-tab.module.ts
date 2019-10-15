import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CounsellorTabPage } from './counsellor-tab.page';
import { CounsellorTabRoutingModule } from './counsellor-tab.router.module'
const routes: Routes = [
  {
    path: '',
    component: CounsellorTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CounsellorTabRoutingModule
  ],
  declarations: [CounsellorTabPage]
})
export class CounsellorTabPageModule {}
