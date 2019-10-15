import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.page.html',
	styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

	// mainuser: AngularFirestoreDocument
	sub
	username: string
	profilePic: string

	password: string
	newpassword: string

	busy: boolean = false
	currentUserId: any;
	userDetail: any = {};

	@ViewChild('fileBtn') fileBtn: {
		nativeElement: HTMLInputElement
	}

	constructor(
		private http: Http,
		// private afs: AngularFirestore,
		public db: AngularFireDatabase,
		private router: Router,
		private alertController: AlertController,
		private user: UserService) {
		// this.mainuser = afs.doc(`users/${user.getUID()}`)
		// ++++++++++++++++++++++
		this.currentUserId = localStorage.getItem('userid')
		this.db.object('User/' + this.currentUserId).valueChanges()
			.subscribe((data: any) => {
				if (data) {

					this.userDetail = data;
					console.log('userData', this.userDetail);
					if (this.userDetail.profilePic)
						this.profilePic = this.userDetail.profilePic;
					this.user.setUser(this.userDetail);
				}
			});
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		// this.sub.unsubscribe()
	}

	updateProfilePic() {
		this.fileBtn.nativeElement.click()
	}

	uploadPic(event) {
		this.busy = true;
		const files = event.target.files

		const data = new FormData()
		data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')

		this.http.post('https://upload.uploadcare.com/base/', data)
			.subscribe(event => {
				const uuid = event.json().file;
				this.profilePic = uuid;
				this.busy = false;
				this.db.object('User/' + this.currentUserId).update({
					profilePic: this.profilePic
				})
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async updateDetails() {
		this.busy = true

		// if(!this.userDetail.password) {
		// 	this.busy = false
		// 	return this.presentAlert('Error!', 'You have to enter a password')
		// }

		// try {
		// 	await this.user.reAuth(this.userDetail.username, this.userDetail.password)
		// } catch(error) {
		// 	this.busy = false
		// 	console.log(error);

		// 	return this.presentAlert('Error!', 'Wrong password!')
		// }

		// if(this.userDetail.newpassword) {
		// 	await this.user.updatePassword(this.userDetail.newpassword)
		// }

		// if(this.userDetail.username !== this.user.getUsername()) {
		// 	await this.user.updateEmail(this.userDetail.username)
		// 	// this.mainuser.update({
		// 	// 	username: this.username
		// 	// })
		// }
		// name:this.userDetail.name,
		// phonenumber:this.userDetail.phonenumber,
		// email:this.userDetail.email,
		// interest:this.userDetail.interest,
		// background:this.userDetail.background
		this.db.object('User/' + this.currentUserId).update(this.userDetail)

		this.password = ""
		this.newpassword = ""
		this.busy = false

		await this.presentAlert('Done!', 'Your profile was updated!')

		this.router.navigate(['/tabs'])
	}

}
