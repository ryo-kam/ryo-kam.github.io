import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  standalone: true,
  imports: [],
  templateUrl: './sticky-bar.component.html',
  styleUrl: './sticky-bar.component.css',
})
export class StickyBarComponent {
  @Input({ required: true }) stickyBarInput!: Array<string>;
  @Input({ required: true }) darkMode!: boolean;
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private scroller: ViewportScroller) {
    scroller.setOffset([0, 100]);
  }

  scrollTo(targetId: string) {
    this.scroller.scrollToAnchor(targetId);
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0, 0]);
  }

  onToggleChange() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
  }
}
