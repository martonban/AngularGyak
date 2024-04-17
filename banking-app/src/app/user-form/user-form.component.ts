import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from '../../../models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  formBuilder = inject(FormBuilder);
  userService = inject(UserService);
  // Angular ROUTER KELL!!
  router = inject(Router);

  userForm = this.formBuilder.group<UserDTO>({
    id: 0,
    customerId: '',
    name: '',
    address: '',
    phone: '',
    idCard: ''
  });

  saveUser() {
    const user = this.userForm.value as UserDTO;

    this.userService.create(user).subscribe({
      next: () => {
        // TODO: notification
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
