import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: DialogRef) {}

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
    this.dialogRef.close();
  }
}
