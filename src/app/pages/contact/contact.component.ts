import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;
  result!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  send() {
    this.myForm.invalid ? (this.result = 'invalido') : this.formConfirm();
  }

  formConfirm() {
    this.result = 'Gracias por comunicarse con nosotros';
    this.myForm.reset();
  }
}
