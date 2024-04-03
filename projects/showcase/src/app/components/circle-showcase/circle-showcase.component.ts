import { Component } from '@angular/core';
import { ShimmerCircleComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiModel } from '../../common/models/apis.model';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-circle-showcase',
  standalone: true,
  templateUrl: './circle-showcase.component.html',
  styleUrl: './circle-showcase.component.css',
  imports: [
    ShowcaseExampleComponent,
    ShimmerCircleComponent,
    ShowcaseApiComponent,
    MatTabsModule
  ],
})
export class CircleShowcaseComponent {
  readonly defaultCode = `
    <shimmer-circle/>
  `;
  readonly sizeCode = `
    <shimmer-circle [size]="100"/>
  `;

  readonly apis: ReadonlyArray<ApiModel> = [
    {
      name: 'size',
      description: 'Size of the circle',
      types: [DataTypeEnum.Number, DataTypeEnum.String],
    },
  ]
}
