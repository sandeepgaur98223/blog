import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class="custom">
      country-list works!
    </p>
  `,
  styles: `.custom{color:blue}`
})
export class CountryListComponent {

}
