import { Component, EventEmitter, Output } from '@angular/core';
import { VersionType } from '../type';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Output()
  versionChanged = new EventEmitter<VersionType>();
}
