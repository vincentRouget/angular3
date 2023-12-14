import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserProfileComponent },
    { path: '', component: UserProfileComponent },
];
