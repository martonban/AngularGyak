import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDTO } from '../../../models';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  transactionService = inject(TransactionService);
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

  deleteUser(user: UserDTO) {
    this.userService.delete(user.id).subscribe({
      next: () => {
        const index = this.users.indexOf(user);
        if(index > -1) {
          this.users.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getTransactionsOfUser(id: number) {
    this.transactionService.transactionsOfUser(id)  
      .subscribe(tranactions => console.log(tranactions));
  }
}
