import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ShimmerRectComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { ApiModel } from '../../common/models/apis.model';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-rect-showcase',
  standalone: true,
  imports: [ShowcaseApiComponent, ShowcaseExampleComponent, ShimmerRectComponent, MatTabsModule],
  templateUrl: './rect-showcase.component.html',
  styleUrl: './rect-showcase.component.css'
})
export class RectShowcaseComponent {
  readonly defaultCode = `
    <shimmer-rect/>
  `
  readonly widthCode = `
    <shimmer-rect [width]="520" [height]="25"/>
  `

  readonly borderRadiusCode = `
    <shimmer-rect [borderRadius]="0px"/>
  `

  readonly randomWidthCode = `
    <shimmer-rect [isRandomWidth]="true"/>
  `;

  readonly apis: ReadonlyArray<ApiModel> = [
    {
      name: 'width',
      description: 'Width of the rect',
      types: [DataTypeEnum.Number, DataTypeEnum.String]
    },
    {
      name: 'height',
      description: 'Height of the rect',
      types: [DataTypeEnum.Number, DataTypeEnum.String]
    },
    {
      name: 'borderRadius',
      description: 'Border radius of the rect',
      types: [DataTypeEnum.String]
    },
    {
      name: 'isRandomWidth',
      description: 'Random Width of the rect',
      types: [DataTypeEnum.Boolean]
    }
  ]
}
