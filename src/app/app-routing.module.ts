import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDashboardComponent } from './modules/clients/components/clients-dashboard/clients-dashboard.component';
import { ErrorComponent } from './shared/errors/components/error/error.component';

const routes: Routes = [
  {
    path: 'clients',
    title: 'Clients',
    component: ClientsDashboardComponent,
  },
  { path: '', component: ClientsDashboardComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
