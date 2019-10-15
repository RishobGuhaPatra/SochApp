import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PayPal } from '@ionic-native/paypal/ngx';

import { PaypalPage } from './paypal.page';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaypalPage
      }
    ])
  ],
  providers: [PayPal,AngularFireDatabase],
  declarations: [PaypalPage]
})
export class PaypalPageModule {}
