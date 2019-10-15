import { Injectable } from '@angular/core'
// import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireAuth } from 'angularfire2/auth';
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app';
import { LoadingController } from '@ionic/angular';

interface user {
	username: string,
	uid: string,
}

@Injectable()
export class UserService {
	private user: user;
	public loading: any;
	constructor(private afAuth: AngularFireAuth, public loadingController: LoadingController) {

	}

	setUser(user: user) {
		this.user = user
	}

	getUsername(): string {
		console.log(this.user);

		return this.user.username
	}

	reAuth(username: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@codedamn.com', password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com')
	}

	async isAuthenticated() {
		if (this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if (user) {
			this.setUser({
				username: user.email.split('@')[0],
				uid: user.uid,
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid
	}
	async presentLoading() {
		this.loading = await this.loadingController.create({
			message: 'Please Wait'
		});
		await this.loading.present();
	}
	dismissLoading() {
		this.loading.dismiss();
	}
}