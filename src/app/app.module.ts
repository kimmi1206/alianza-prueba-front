import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from '@angular/cdk/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsDashboardComponent } from './modules/clients/components/clients-dashboard/clients-dashboard.component';
import { ErrorComponent } from './shared/errors/components/error/error.component';
import { CreateClientComponent } from './modules/clients/components/create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientsDashboardComponent,
    ErrorComponent,
    CreateClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    DialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
