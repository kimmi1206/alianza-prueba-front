import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { Client } from 'src/app/model/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: DialogRef,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(20)],
        },
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.maxLength(100),
          ],
        },
      ],
      startdate: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      enddate: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  isTouchedOrDirty(controlName: string): boolean {
    return (
      this.form.get(controlName)?.touched ??
      this.form.get(controlName)?.dirty ??
      false
    );
  }

  saveClient(): void {
    this.clientService
      .saveClient(this.buildRequestBody())
      .subscribe((response: any) => {
        if (response) console.log(response);
      });
    this.dialogRef.close();
  }

  buildRequestBody(): Client {
    let clientObject = new Client();

    clientObject.email = this.form.controls['email'].value;
    clientObject.sharedKey = clientObject.email.split('@')[0].substring(0, 10);
    clientObject.businessId = this.form.controls['name'].value.substring(0, 10);
    clientObject.phone = this.form.controls['phone'].value;
    clientObject.startDate = this.form.controls['startdate'].value;
    clientObject.endDate = this.form.controls['enddate'].value;
    clientObject.dateAdded = new Date(Date.now()).toISOString().split('T')[0];

    console.log(clientObject);
    return clientObject;
  }
}
