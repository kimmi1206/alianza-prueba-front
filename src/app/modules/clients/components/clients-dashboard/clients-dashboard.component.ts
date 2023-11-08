import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/model/client';
import { Dialog } from '@angular/cdk/dialog';
import { CreateClientComponent } from '../create-client/create-client.component';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css'],
})
export class ClientsDashboardComponent implements OnInit {
  inputKeyword: string = '';
  clientSearch?: Client;

  displayedColumns: string[] = [
    'sharedKey',
    'businessId',
    'email',
    'phone',
    'dateAdded',
    'edit',
  ];

  dataSource: MatTableDataSource<Client> = new MatTableDataSource();

  data: Client[] = [];

  constructor(public dialog: Dialog, private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getData().subscribe((response: any) => {
      this.dataSource.data = response;
      this.data = this.dataSource.data.slice();
      console.log(response);
    });
  }

  searchKeyword() {
    if (this.dataSource.data.length != this.data.length) {
      this.dataSource.data = this.data.slice();
    }

    if (this.inputKeyword.trim()) {
      this.dataSource.data = this.data.filter((element) =>
        element.sharedKey
          .toLowerCase()
          .includes(this.inputKeyword.toLowerCase())
      );
    }
  }

  getBySharedKey() {
    if (this.inputKeyword.trim()) {
      this.clientService
        .getBySharedKey(this.inputKeyword)
        .subscribe((response: any) => {
          if (response) this.clientSearch = response;
          console.log(response);
        });
    }
  }

  openDialog(): void {
    this.dialog.open(CreateClientComponent);
  }

  exportCsv(): void {
    console.log('Exports o Csv');
  }
}
