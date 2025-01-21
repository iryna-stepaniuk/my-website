import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
} from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-website';
}
