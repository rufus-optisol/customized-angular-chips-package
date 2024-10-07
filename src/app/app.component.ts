import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomChipsComponent } from '../../projects/custom-chips/src/lib/custom-chips/custom-chips.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomChipsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'simple-chips';
  items = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 28,
      isActive: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 34,
      isActive: false
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 25,
      isActive: true
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      age: 40,
      isActive: false
    },
    {
      id: 5,
      name: 'Charlie Green',
      email: 'charlie.green@example.com',
      age: 30,
      isActive: true
    },
    {
      id: 11,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 28,
      isActive: true
    },
    {
      id: 12,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 34,
      isActive: false
    },
    {
      id: 13,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 25,
      isActive: true
    },
    {
      id: 14,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      age: 40,
      isActive: false
    },
    {
      id: 15,
      name: 'Charlie Green',
      email: 'charlie.green@example.com',
      age: 30,
      isActive: true
    }
  ]
}
