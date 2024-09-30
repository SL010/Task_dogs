import { Routes } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { MessageFormComponent } from './components/message-form/message-form.component';

export const routes: Routes = [
  { path: 'dogs', component: DogListComponent },
  { path: 'messages', component: MessageFormComponent },
  { path: '', redirectTo: '/dogs', pathMatch: 'full' }, 
];
