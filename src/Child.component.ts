import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-Child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'Child.component.html',
})
export class AppChild {
  constructor() {}
}

bootstrapApplication(AppChild);
