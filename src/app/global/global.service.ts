import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public toastCtrl:ToastController) { }
  async presentToast(message) {
		const toast = await this.toastCtrl.create({
			message: message,
			duration: 2000
		});
		toast.present();
	}

}
