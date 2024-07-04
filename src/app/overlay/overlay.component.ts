import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css',
})
export class OverlayComponent {
  toList = (items: Array<string>) => {
    return '<ul>' + items.map((item) => `<li>${item}</li>`) + '</ul>';
  };

  items = [
    {
      name: 'Thred',
      date: 'Nov 2023 - Jul 2024',
      summary: this.toList(['Hi', 'Hello']),
    },
    {
      name: 'EscapeHQ',
      date: 'Feb 2023 - Apr 2024',
      summary: this.toList(['Hi', 'Hello']),
    },
  ];
}
