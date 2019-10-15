import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app'
import { FirebaseProvider } from '../service/firebase.service';
// import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController } from '@ionic/angular'
import { RateCounselorPage } from '../rate-counselor/rate-counselor.page'
@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	
	username: string = ""
	password: string = ""
	cpassword: string = ""
	public countryName: any;
	public loginType:any='User';
	LoggedInUserData:any={}
	clientDetailForm:any={
		firstName:'',
		middleName:'',
		lastName:'',
		name:'',
		DOB:'',
		Gender:'',
		occupation:'',
		phoneNo:'',
		address:'',
		Topic:'',
		Reference:'',
		motherMaidenName:'',
		sleepingHours:'',
		Pin4Digit:'',
		ConfirmPin4Digit:''
	}
	counsellorDetailForm:any={
		firstName:'',
		middleName:'',
		lastName:'',
		name:'',
		DOB:'',
		Gender:'',
		occupation:'',
		phoneNo:'',
		address:'',
		educationInfo:'',
		bio:'',
		Topic:'',
		Pin4Digit:'',
		ConfirmPin4Digit:''
	}
	Form:any=[
		{value:'Depression', isChecked:false},
		{value:'Anxiety', isChecked:false},
		{value:'Relationship issues', isChecked:false},
		{value:'Social isolation', isChecked:false},
		{value:'Life transition challenges', isChecked:false},
		{value:'Eating disorders / Body image issues', isChecked:false},
		{value:'Addiction support', isChecked:false},
		{value:'Academic or work challenges', isChecked:false},
		{value:'Marital pressures', isChecked:false},
		{value:'LGBTQ+', isChecked:false},
		{value:'Other', isChecked:false},
	]
	agreement:any=[
		{value:'Privacy Policy', isChecked:false, route:'/privacy-policy'},
		{value:'Terms and Condtions', isChecked:false, route:'/terms-of-conditions'},
	]
	constructor(
		public afAuth: AngularFireAuth,
		// public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router,
		private geolocation: Geolocation,
		private nativeGeocoder: NativeGeocoder,
		public toastController: ToastController,
		public firebaseProvider: FirebaseProvider,
		public modalCtrl:ModalController
	) { }

	ngOnInit() {
		this.geolocation.getCurrentPosition().then((resp) => {
			// resp.coords.latitude
			// resp.coords.longitude
			console.log(resp);

			let options: NativeGeocoderOptions = {
				useLocale: true,
				maxResults: 5
			};

			this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
				.then((result: NativeGeocoderResult[]) => {
					this.countryName = result[0].countryCode;
					console.log(JSON.stringify(result[0]));
				})
				.catch((error: any) => console.log(error));
		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}
	check(){
		console.log(this.loginType)
	}

	register(UserForm) {
		// if (this.countryName == 'IN') {
			const { username, password, cpassword } = this
			if(!username){
				this.presentToast("Email can not be empty");
				return console.error("Email can not be empty")
			}
			else if(!password || !cpassword){
				this.presentToast("Passwords can not be empty");
				return console.error("Passwords can not be empty")
			}
			else if (password !== cpassword) {
				this.presentToast("Passwords don't match");
				return console.error("Passwords don't match")
			}
			if((UserForm.Pin4Digit).toString().length!=4 || (UserForm.ConfirmPin4Digit).toString().length!=4){
				this.presentToast("Pin should be of 4 digit only");
				return console.error("Pin should be of 4 digit only")
			}
			else if(UserForm.Pin4Digit!=UserForm.ConfirmPin4Digit){
				this.presentToast("Pin and confirm pin should be same");
				return console.error("Pin and confirm pin should be same")
			}
		
			if(!this.agreement[0].isChecked || !this.agreement[1].isChecked){
				this.presentToast("Policy and terms should be agree");
				return console.error("Policy and terms should be agree")
			}
			if (this.countryName != 'IN' && UserForm.account_type=='counsellor') {
				this.presentToast("You try to register from outside India");
				return console.error("You try to register from outside India")
			}
			
			this.validateForm(UserForm).then((x)=>{
				if(x){
					this.afAuth.auth.createUserWithEmailAndPassword(username, password).then(res => {
				
						this.firebaseProvider.getTokenNew().then(x=>{
							console.log(x)
							this.setUserDetails(res,username,x,UserForm)
						},error=>{
							this.setUserDetails(res,username,'',UserForm)
						})
						localStorage.setItem('userid', res.user.uid);
						firebase.database().ref(this.loginType).once('value',snap=>{
							var data=snap.val()
							for(var key in data){
							  if(data[key].uid==res.user.uid && data[key].username==username){
								this.LoggedInUserData=data[key];
								localStorage.setItem('LoggedInUserData',JSON.stringify(this.LoggedInUserData))
							  }
							}
						  })
						
						if(this.loginType=='User'){
							this.user.setUser({
								username,
								uid: res.user.uid
							})
							this.presentAlert('Success', 'You are registered!')
							this.router.navigate(['/tabs'])
						}
						else{
							this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.')
							this.router.navigate(['/login'])
						}
						
					}, err => {
						this.presentToast(err.message);
					})
				}

			})
			
			// try {
			// 	const res: any = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
			// 	console.log(res);
			// 	// console.log(res.uid);
			// 	console.log(username);


			// 	firebase.database().ref('User').child(res.user.uid).set({
			// 		username: username,
			// 		uid: res.user.uid
			// 	})
			// 	// this.afstore.doc(`users/${res.user.uid}`).set({
			// 	// 	username
			// 	// })

			// 	this.user.setUser({
			// 		username,
			// 		uid: res.user.uid
			// 	})
			// 	localStorage.setItem('userid', res.user.uid);
			// 	this.presentAlert('Success', 'You are registered!')
			// 	this.router.navigate(['/tabs'])

			// } catch (err) {
			// 	let toast: any = this.toastController.create({
			// 		message: err.message,
			// 		duration: 2000
			// 	});
			// 	toast.present();
			// 	// console.dir(error)
			// }
		// }
		// else {
		// 	this.presentToast("You try to register from outside India");
		// }
	}
	
	validateForm(Form){
		
		return new Promise((resolve)=>{
			var array:any=Object.keys(Form)
			var data=this.loginType=='User'?this.clientDetailForm:this.counsellorDetailForm
			data['Topic']=this.Form;
			data['name']=data.firstName+' '+(data.middleName?(data.middleName+' '):'')+data.lastName
			var valid_flag=0;
			for(var key in array){
				if(array[key]!='middleName' && !data[array[key]]){
					valid_flag++;
				}
			}
			if(valid_flag==0){  //Valid
				resolve(true)
			}
			else{				//Invalid
				this.presentToast("Please fill all the details carefully");
				resolve(false)
			}
		})
	}
	setUserDetails(res,username,x,details){
		if(this.loginType=='User'){
			firebase.database().ref(this.loginType).child(res.user.uid).set({
				username: username,
				uid: res.user.uid,
				device_token:x?x:'',
				account_type:this.loginType,
				verification:'cleared'
			})
			firebase.database().ref(this.loginType).child(res.user.uid).update(details)

		}
		else{
			firebase.database().ref(this.loginType).child(res.user.uid).set({
				username: username,
				uid: res.user.uid,
				device_token:x?x:'',
				account_type:this.loginType,
				verification:'pending'
			})
			firebase.database().ref(this.loginType).child(res.user.uid).update(details)
			firebase.database().ref('Counsellor_Verification').child(res.user.uid).set({
				username: username,
				uid: res.user.uid,
				device_token:x?x:'',
				account_type:this.loginType,
				verification:'pending'
			})
		}
		
	}
	async presentToast(message) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000
		});
		toast.present();
	}
	async back() {
		await this.router.navigate(["/login"]);
	}
	

}
