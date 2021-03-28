import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  { path: 'adduser', component: AdduserComponent },
  { path: 'userdetail/:id',      component: UserdetailsComponent },
  { path: 'userlist',      component: UserlistComponent },
  { path: 'updateuser/:id',      component: UpdateuserComponent },
  { path: '',      component: UserlistComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
