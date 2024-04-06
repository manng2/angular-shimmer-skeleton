import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'shimmer-rect',
  template: `
    <div
      class="shimmer-rect shimmer-pulse"
      [style.width]="computedWidth()"
      [style.height.px]="height()"
      [style.border-radius]="borderRadius()"
    ></div>
  `,
  standalone: true,
  styleUrls: ['../styles/animation.css', '../styles/rect.css'],
})
export class ShimmerRectComponent {
  readonly width = input<number | string>();
  readonly height = input<number>();
  readonly borderRadius = input<string>();
  readonly isRandomWidth = input<boolean>(false);

  readonly computedWidth = computed(() => {
    if (this.isRandomWidth()) {
      return `${Math.random() * 85 + 15}%`;
    }

    return `${this.width()}px`;
  })
}
