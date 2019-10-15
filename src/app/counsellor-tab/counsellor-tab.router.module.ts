import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { CounsellorTabPage } from './counsellor-tab.page';

const routes: Routes = [
	{
		path: '',
		component: CounsellorTabPage,
		children: [
			{ path: '', redirectTo: 'feed', pathMatch: 'full' },
			{ path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
			{ path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
			{ path: 'finance', loadChildren: '../finance/finance.module#FinancePageModule' },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
			{ path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' },
			{ path: 'counselor-chat', loadChildren: '../counselor-chat/counselor-chat.module#CounselorChatPageModule' },
			{ path: 'clients', loadChildren: '../clients/clients.module#ClientsPageModule' },
			// { path: 'finances', loadChildren: '../finances/finances.module#FinancesPageModule' },
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CounsellorTabRoutingModule { }