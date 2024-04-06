import { Component, computed, input } from '@angular/core';
import { ShimmerRectComponent } from './rect.component';
import { ShimmerCircleComponent } from './circle.component';

@Component({
  selector: 'shimmer-table',
  standalone: true,
  template: `
    <table>
      <tr>
        @for(i of _columns(); track $index) {
        <th [attr.colspan]="colSpans()[$index]">
          <shimmer-rect width="50" [height]="16" borderRadius="0px"></shimmer-rect>
        </th>
        }
      </tr>

      @for(i of _rows(); track $index) {
      <tr>
        @for(j of _columns(); track $index) {
        <td [attr.colspan]="colSpans()[$index]">
          <shimmer-rect [isRandomWidth]="true" [height]="16" borderRadius="0px"></shimmer-rect>
        </td>
        }
      </tr>
      }
    </table>
  `,
  styleUrls: ['../styles/table.css', '../styles/animation.css'],
  imports: [ShimmerRectComponent, ShimmerCircleComponent],
})
export class ShimmerTableComponent {
  readonly rows = input<number>(5);
  readonly columns = input<number>(5);
  readonly colSpans = input<ReadonlyArray<number>>([2, 2, 5, 4, 3]);

  protected readonly _rows = computed(() =>
    Array.from({ length: this.rows() })
  );
  protected readonly _columns = computed(() =>
    Array.from({ length: this.columns() })
  );
}
