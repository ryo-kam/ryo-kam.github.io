import { Component, Input } from '@angular/core';
import { CardComponent, CardInput } from './card/card.component';
import { CommonModule } from '@angular/common';

export type OverlayInput = {
  title: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  cardInputs?: Array<CardInput>;
  descriptions: Array<string>;
  image?: string;
};

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css',
})
export class OverlayComponent {
  @Input({ required: true }) overlayInput!: OverlayInput;
}
