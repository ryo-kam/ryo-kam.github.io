import { Component, Input } from '@angular/core';

export type CardInput = {
  heading: string;
  description: Array<string>;
  icon?: string;
  footer?: string;
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) cardInput!: CardInput;
}
