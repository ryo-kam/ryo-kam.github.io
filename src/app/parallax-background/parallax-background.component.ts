import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

type Coords = [number, number];

type Tile = {
  type: 0 | 1;
  a: Coords;
  b: Coords;
  c: Coords;
};

@Component({
  selector: 'app-parallax-background',
  standalone: true,
  imports: [],
  templateUrl: './parallax-background.component.html',
  styleUrl: './parallax-background.component.css',
})
export class ParallaxBackgroundComponent {
  @ViewChild('svg', { static: true })
  penroseTiling!: ElementRef<SVGElement>;
  phi = (1 + Math.sqrt(5)) / 2;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.generatePenroseTiling(6);
  }

  generatePenroseTiling(iterations: number) {
    let tiles = this.initialTiles();
    for (let i = 0; i < iterations; i++) {
      tiles = this.subdivide(tiles);
    }

    const svg = this.penroseTiling.nativeElement;

    tiles.forEach((tile) => {
      const points = [tile.c, tile.a, tile.b]
        .map((coord) => coord.join(','))
        .join(' ');
      const polygon = this.document.createElementNS(
        'http://www.w3.org/2000/svg',
        'polyline'
      );

      polygon.setAttribute('points', points);

      if (tile.type === 0) {
        polygon.setAttribute('fill', '#bca051');
      } else {
        polygon.setAttribute('fill', '#a2d898');
      }
      // polygon.setAttribute('fill', 'none');
      polygon.setAttribute('stroke', '#E2D7B1');
      polygon.setAttribute('stroke-width', '0.3');
      polygon.setAttribute('stroke-linejoin', 'round');
      polygon.setAttribute('stroke-linecap', 'round');
      polygon.setAttribute('shape-rendering', 'auto');

      svg.appendChild(polygon);
    });
  }

  initialTiles(): Array<Tile> {
    const triangles: Array<Tile> = [];
    const r = 130;
    for (let i = 0; i < 10; i++) {
      let b: Coords = this.polToRect(r, ((2 * i - 1) * Math.PI) / 10);
      let c: Coords = this.polToRect(r, ((2 * i + 1) * Math.PI) / 10);
      if (i % 2 === 0) {
        [b, c] = [c, b];
      }
      triangles.push({ type: 0, a: [0, 0], b, c });
    }
    return triangles;
  }

  subdivide(tiles: Array<Tile>): Array<Tile> {
    const result: Array<Tile> = [];

    tiles.forEach((tile) => {
      if (tile.type === 0) {
        const p: Coords = [
          tile.a[0] + (tile.b[0] - tile.a[0]) / this.phi,
          tile.a[1] + (tile.b[1] - tile.a[1]) / this.phi,
        ];

        result.push(
          { type: 0, a: tile.c, b: p, c: tile.b },
          { type: 1, a: p, b: tile.c, c: tile.a }
        );
      } else {
        const q: Coords = [
          tile.b[0] + (tile.a[0] - tile.b[0]) / this.phi,
          tile.b[1] + (tile.a[1] - tile.b[1]) / this.phi,
        ];

        const r: Coords = [
          tile.b[0] + (tile.c[0] - tile.b[0]) / this.phi,
          tile.b[1] + (tile.c[1] - tile.b[1]) / this.phi,
        ];

        result.push(
          { type: 1, a: r, b: tile.c, c: tile.a },
          { type: 1, a: q, b: r, c: tile.b },
          { type: 0, a: r, b: q, c: tile.a }
        );
      }
    });

    return result;
  }

  polToRect(r: number, theta: number): Coords {
    return [r * Math.cos(theta), r * Math.sin(theta)];
  }
}
