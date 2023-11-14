import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsDashboardComponent } from './components/clients-dashboard/clients-dashboard.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ClientsDashboardComponent, CreateClientComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [ClientsDashboardComponent],
})
export class ClientsModule {}
