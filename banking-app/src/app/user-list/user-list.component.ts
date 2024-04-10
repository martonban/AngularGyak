import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDTO } from '../../../models';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);

  users: UserDTO[] = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: users => this.users = users,
      error: err => console.error(err) 
    });
  }

}
