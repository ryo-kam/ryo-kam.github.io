import { Component, Input } from '@angular/core';

type CardInput = {
  title: string,
  description: string,
  imgRef: string,
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) title: string = "";
  @Input() otherInfo: string = "";
}
