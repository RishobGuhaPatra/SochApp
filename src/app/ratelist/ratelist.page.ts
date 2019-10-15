import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
// import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
// import { firestore } from 'firebase/app';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFireFunctions } from '@angular/fire/functions';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as firebase from 'firebase'

@Component({
	selector: 'app-ratelist',
	templateUrl: './ratelist.page.html',
	styleUrls: ['./ratelist.page.scss'],
})
export class RateListPage implements OnInit {

	posts;
	sub;
	instantPlan: any = [
		{
			value: false,
			price: 1200,
			diplayPrice: "₹ 1,200",
			seesion: 1
		},
		{
			value: false,
			price: 6000,
			diplayPrice: "₹ 6,000",
			seesion: 6
		},
		{
			value: false,
			price: 12000,
			diplayPrice: "₹ 12,000",
			seesion: 12
		}
	];
	scheculePlan: any = [
		{
			value: false,
			price: 1200,
			diplayPrice: "₹ 1,200",
			seesion: 1
		},
		{
			value: false,
			price: 7000,
			diplayPrice: "₹ 7,000",
			seesion: 6
		},
		{
			value: false,
			price: 11000,
			diplayPrice: "₹ 11,000",
			seesion: 12
		}
	];
	totalPrice = 0;
	selectedPlanDetail: any = [];
	ratingDetails:any=[]
	dateforSchedulePlan: any;
	anyScheduledPlan: boolean = false;
	counsellorId: any;
	counsellorName: any;

	imageURL: string;
	desc: string;
	title: string;
	// postReference: AngularFirestoreDocument;

	heartType: string = "heart-empty";
	@ViewChild('fileButton') fileButton

	constructor(
		public http: Http,
		// public afstore: AngularFirestore,
		// public aff: AngularFireFunctions,
		public user: UserService,
		private alertController: AlertController,
		private router: Router,
		public activRoute: ActivatedRoute,
		private datePicker: DatePicker,
		public nav: NavController) {
		this.activRoute.params.subscribe((params) => {
			if (params) {
				this.counsellorId = params.counsellorId;
				this.counsellorName = params.counsellorName;
			}
		});
	}

	ngOnInit() {
		this.http
			.get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
			.subscribe(data => {
				this.posts = JSON.parse(data["_body"]);
				if (this.posts.likes && this.posts.likes.length > 0) {
					this.heartType = this.posts.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty';
				}
			});
	}

	ngOnDestroy() {
		// this.sub.unsubscribe;
	}
	back() {
		this.nav.pop();
	}

	gotoPaypal() {
		this.totalPrice = 0;
		this.selectedPlanDetail = [];
		this.ratingDetails=[]
		this.anyScheduledPlan = false;
		for (let i = 0; i < this.instantPlan.length; i++) {
			if (this.instantPlan[i].value) {
				this.totalPrice = this.totalPrice + this.instantPlan[i].price;
				for (let index = 0; index < this.instantPlan[i].seesion; index++) {
					this.selectedPlanDetail.push(false);
					this.ratingDetails.push(false);
				}
			}
		}
		for (let i = 0; i < this.scheculePlan.length; i++) {
			if (this.scheculePlan[i].value) {
				this.anyScheduledPlan = true;
				this.totalPrice = this.totalPrice + this.scheculePlan[i].price;
				for (let index = 0; index < this.scheculePlan[i].seesion; index++) {
					this.selectedPlanDetail.push(false);
					this.ratingDetails.push(false);
				}
			}
		}
		if (this.anyScheduledPlan && !this.dateforSchedulePlan) {
			this.datePicker.show({
				date: new Date(),
				mode: 'date',
				androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
			}).then(
				date => this.dateforSchedulePlan = date,
				err => console.log('Error occurred while getting date: ', err)
			);
		}
		else {
			let tempdata;
			if (this.dateforSchedulePlan) {
				tempdata = {
					dateforSchedulePlan: this.dateforSchedulePlan,
					seesionList: this.selectedPlanDetail,
					rating:this.ratingDetails,
					isScheduled: true
				}
			}
			else {
				tempdata = {
					seesionList: this.selectedPlanDetail,
					rating:this.ratingDetails,
					isScheduled: false
				}
			}
			console.log(this.totalPrice);

			if (this.totalPrice > 0) {
				this.router.navigate(["/paypal", this.counsellorId, this.counsellorName, this.totalPrice, JSON.stringify(tempdata)]);
			}
		}
	}
	
}
