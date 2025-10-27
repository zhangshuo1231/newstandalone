import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, HomeComponent, CommonModule, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for Beginners';
  todayDate = new Date();
  salary = 200000.00;
  _object = { name: 'Angular', version: 18 };

  isdisabled = false;
}
