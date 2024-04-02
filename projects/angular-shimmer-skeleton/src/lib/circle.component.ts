import { Component, input } from '@angular/core';

@Component({
  selector: 'shimmer-circle',
  template: `
    <div
      class="shimmer-circle shimmer-pulse"
      [style.width.px]="size()"
      [style.height.px]="size()"
    ></div>
  `,
  standalone: true,
  styleUrls: ['../styles/animation.css', '../styles/circle.css'],
})
export class ShimmerCircleComponent {
  readonly size = input<number>();
}
