import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/model/client';

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

  constructor() {}

  ngOnInit(): void {
    console.log('Clients Dashboard');
  }
}
