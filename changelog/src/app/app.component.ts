import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionComponent } from './version/version.component';
import { ControlComponent } from './control/control.component';
import { ChangelogComponent } from './changelog/changelog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VersionComponent, ControlComponent, ChangelogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'changelog';
}
