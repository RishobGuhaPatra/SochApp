import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{ path: '', redirectTo: 'feed', pathMatch: 'full' },
			{ path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
			{ path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
			{ path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
			{ path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' },
			{ path: 'counselor-chat', loadChildren: '../counselor-chat/counselor-chat.module#CounselorChatPageModule' },
			{ path: 'clients', loadChildren: '../clients/clients.module#ClientsPageModule' },
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
  