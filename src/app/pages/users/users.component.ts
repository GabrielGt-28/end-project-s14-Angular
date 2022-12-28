import { Component } from '@angular/core';
import { ServicesApiService } from '../../services/services-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  listPeople: Array<any> = [];

  constructor(private listApi: ServicesApiService) {
    this.listApi.getUrl().subscribe((resp: any) => {
      this.listPeople = resp;
      // console.log(resp);
    });
  }
}
