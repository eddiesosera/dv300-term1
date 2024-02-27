import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client2';
}
