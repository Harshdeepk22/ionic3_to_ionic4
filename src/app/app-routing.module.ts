import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {LoginPage} from './components/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)},
  { path: 'signup', loadChildren: './components/signup/signup.module#SignupPageModule' },
  { path: 'forgot-password', loadChildren: './components/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: '', loadChildren: './components/tabs/tabs.module#TabsPageModule' },
  //{ path: 'search', loadChildren: './components/search/search.module#SearchPageModule' },
  //{ path: 'user-profile', loadChildren: './components/user-profile/user-profile.module#UserProfilePageModule' },
  //{ path: 'notification', loadChildren: './components/notification/notification.module#NotificationPageModule' },
  //{ path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
 // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
