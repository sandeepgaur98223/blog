import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="custom">
      student-list works!
    </p>
  `,
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

}
