import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDTO } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  router = inject(Router);

  users: UserDTO[] = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: users => this.users = users,
      error: err => console.error(err) 
    });
  }

  goToUserForm(id: number) {
    this.router.navigate(['/edit-user', id]);
  }
}
