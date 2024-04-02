import { Component } from '@angular/core';
import { ShimmerTableComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';

@Component({
  selector: 'app-table-showcase',
  standalone: true,
  imports: [ShimmerTableComponent, ShowcaseExampleComponent],
  templateUrl: './table-showcase.component.html',
  styleUrl: './table-showcase.component.css'
})
export class TableShowcaseComponent {
  readonly colSpans = [1, 3, 5, 4, 2]
  readonly defaultCode = `
    <shimmer-table/>
  `

  readonly rowCode = `
    <shimmer-table [rows]="10"/>
  `

  readonly columnCode = `
    <shimmer-table [columns]="3"/>
  `

  readonly colSpansCode = `
    <shimmer-table [colSpans]="${this.colSpans}"/>
  `
}
