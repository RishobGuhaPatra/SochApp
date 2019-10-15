import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pin', loadChildren: './pin/pin.module#PINPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'session-notes', loadChildren: './session-notes/session-notes.module#SessionNotesPageModule' },
  
  { path: 'account' , loadChildren:'./edit-profile/edit-profile.module#EditProfilePageModule'},
  // { path: 'register-questions', loadChildren: './register-questions/register-questions.module#RegisterQuestionsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
  { path: 'counsellor-tab', loadChildren: './counsellor-tab/counsellor-tab.module#CounsellorTabPageModule', canActivate: [AuthService] },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'counsellor-setting', loadChildren: './counsellor-setting/counsellor-setting.module#CounsellorSettingPageModule' },
  { path: 'rates', loadChildren: './rates/rates.module#RatesPageModule' },
  { path: 'soch-connect', loadChildren: './soch-connect/soch-connect.module#SochConnectPageModule' },
  { path: 'counselor-chat', loadChildren: './counselor-chat/counselor-chat.module#CounselorChatPageModule' },
  { path: 'uploaderdetail/:id', loadChildren: './uploaderdetail/uploaderdetail.module#UploaderDetailPageModule' },
  { path: 'ratelist/:counsellorId/:counsellorName', loadChildren: './ratelist/ratelist.module#RateListPageModule' },
  { path: 'bubble/:id', loadChildren: './bubble/bubble.module#BubblePageModule' },
  { path: 'paypal/:counsellorId/:counsellorName/:totalAmount/:selectedPlan', loadChildren: './paypal/paypal.module#PaypalPageModule' },
  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsPageModule' },
  { path: 'councelor-bubble/:index/:sessionId/:id/:name',
  loadChildren: './counselor-bubble/counselor-bubble.module#CounselorBubblePageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'terms-of-conditions', loadChildren: './terms-of-conditions/terms-of-conditions.module#TermsOfConditionsPageModule' },
  { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' },
  { path: 'register-questions', loadChildren: './register-questions/register-questions.module#RegisterQuestionsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'counsellor-tab', loadChildren: './counsellor-tab/counsellor-tab.module#CounsellorTabPageModule' },
  { path: 'counsellor-setting', loadChildren: './counsellor-setting/counsellor-setting.module#CounsellorSettingPageModule' },
  { path: 'rate-counselor', loadChildren: './rate-counselor/rate-counselor.module#RateCounselorPageModule' },
  { path: 'finance', loadChildren: './finance/finance.module#FinancePageModule' },
  { path: 'session-details', loadChildren: './session-details/session-details.module#SessionDetailsPageModule' },



];

// localhost/tabs

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
