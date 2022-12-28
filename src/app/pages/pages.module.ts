import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, UsersComponent, ContactComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [HomeComponent, UsersComponent, ContactComponent],
})
export class PagesModule {}
