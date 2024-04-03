import { Component } from '@angular/core';
import { ShimmerTableComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-table-showcase',
  standalone: true,
  imports: [
    ShimmerTableComponent,
    ShowcaseExampleComponent,
    ShowcaseApiComponent,
    MatTabsModule,
  ],
  templateUrl: './table-showcase.component.html',
  styleUrl: './table-showcase.component.css',
})
export class TableShowcaseComponent {
  readonly colSpans = [1, 3, 5, 4, 2];
  readonly defaultCode = `
    <shimmer-table/>
  `;

  readonly rowCode = `
    <shimmer-table [rows]="10"/>
  `;

  readonly columnCode = `
    <shimmer-table [columns]="3"/>
  `;

  readonly colSpansCode = `
    <shimmer-table [colSpans]="${this.colSpans}"/>
  `;

  readonly apis = [
    {
      name: 'rows',
      description: 'Number of rows in the table',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'columns',
      description: 'Number of columns in the table',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'colSpans',
      description: 'Array of column spans',
      types: [DataTypeEnum.ArrayNumber],
    },
  ];
}
