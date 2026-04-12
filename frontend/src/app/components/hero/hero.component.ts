import {Component, signal} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  company = '';

  onSubmit() {
    if (this.company.trim()) {
      console.log('submitted:', this.company);
    }
  }

}
