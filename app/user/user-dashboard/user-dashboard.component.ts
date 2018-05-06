import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../user.model';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  editing = false;
  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    return this.auth.user.subscribe(user => (this.user = user));
  }

}
