import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/model/client';
import { Dialog } from '@angular/cdk/dialog';
import { CreateClientComponent } from '../create-client/create-client.component';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css'],
})
export class ClientsDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'shared_key',
    'business_id',
    'email',
    'phone',
    'data_added',
    'edit',
  ];

  dataSource: MatTableDataSource<Client> = new MatTableDataSource();

  constructor(public dialog: Dialog) {}

  ngOnInit(): void {
    console.log('Clients Dashboard');
  }

  openDialog(): void {
    this.dialog.open(CreateClientComponent);
  }

  exportCsv(): void {
    console.log('Exports o Csv');
  }
}
