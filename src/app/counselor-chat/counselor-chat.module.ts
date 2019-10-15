import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CounselorChatPage } from './counselor-chat.page';

const routes: Routes = [
  {
    path: '',
    component: CounselorChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CounselorChatPage]
})
export class CounselorChatPageModule {}
