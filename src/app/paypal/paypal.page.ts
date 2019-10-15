import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.page.html',
  styleUrls: ['paypal.page.scss'],
})
export class PaypalPage {


  selectedPlan: any = [];
  totalAmount: any;
  totalAmountInDollar: any;
  counsellorId: any;
  counsellorName: any;

  constructor(public payPal: PayPal,
              public navController: NavController,
              public activRoute: ActivatedRoute,
              public db: AngularFireDatabase,
              public router: Router
  ) {
    this.activRoute.params.subscribe((params) => {
      if (params && params.selectedPlan) {
        this.counsellorId = params.counsellorId;
        this.counsellorName = params.counsellorName;
        this.selectedPlan = JSON.parse(params.selectedPlan);
        this.totalAmount = params.totalAmount;
        this.totalAmountInDollar = this.totalAmount / 69.54;
        this.totalAmountInDollar = this.totalAmountInDollar.toString();
      }
    });
  }
  // PayPalEnvironmentSandbox: 'AaVdKOVqUONrDYqtPPMK3yVvBPGVGdBlHyLFz9QQPVz0iSnXCZZ6szCGomfqNMZvOFF1cznLTTsEAHyY'
  // PayPalEnvironmentProduction: 'AWrSVmrBBUsp2tF4EkpzdGw5-D0Hx71jkt4TMYNAkYMiAXbvv98A6-Iev1MzRbVDEs743DUcUXZf3Qkr',
  makePayment() {
    // this.addSesionData();
    this.payPal.init({

      PayPalEnvironmentProduction: 'AQNy5Xwj4YAIE1bIf9TOpdJ3pGAdZ2wlNTZzi-88qHJQt2hv1k9WUrej18QmTpTil-TqjjN5pSsRua9c',
      PayPalEnvironmentSandbox: ''
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
        acceptCreditCards: false,
        languageOrLocale: 'en-US',
        merchantName: 'Rishob Guha Patra',
        merchantPrivacyPolicyURL: '',
        merchantUserAgreementURL: ''
      })).then(() => {
        const detail = new PayPalPaymentDetails(this.totalAmountInDollar, '0.00', '0.00');
        const payment = new PayPalPayment(this.totalAmountInDollar, 'USD', 'Soch', 'Sale', detail);
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log('Payments Success');
          this.addSesionData();
          console.log(res);
        }, () => {
          console.log('Error or render dialog closed without being successful');
        });
      }, () => {
        console.log('Error in configuration');
      });
    }, (err) => {
      console.log('Error in initialization, maybe PayPal isn\'t supported or something else' + JSON.stringify(err));
    });
  }
  back() {
    this.navController.pop();
  }

  addSesionData() {
    let res = this.db.list('sessions').push({
      cid: this.counsellorId,
      counsellorName: this.counsellorName,
      uid: localStorage.getItem('userid'),
      selectedPlan: this.selectedPlan
    });
    if (res) {
      this.router.navigate(['councelor-bubble', 0, res.key, this.counsellorId, this.counsellorName])
    }
  }
  checkpayment() {
    firebase.database().ref('features').once('value', snap => {
      const data = snap.val();
      if (data.payment) {
        this.makePayment();
      }
      else {
        this.addSesionData();
      }
      // console.log(data)
    });
  }
}
