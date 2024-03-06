import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private USERNAME_KEY = 'username';

  saveUsername(username: string) {
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  getUsername(): string {
    const username = localStorage.getItem(this.USERNAME_KEY);
    return username || '';
  }
}
