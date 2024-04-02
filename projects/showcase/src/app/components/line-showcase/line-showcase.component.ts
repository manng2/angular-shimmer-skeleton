import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ShimmerLineComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { ApiModel } from '../../common/models/apis.model';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-line-showcase',
  standalone: true,
  imports: [ShowcaseApiComponent, ShowcaseExampleComponent, ShimmerLineComponent, MatTabsModule],
  templateUrl: './line-showcase.component.html',
  styleUrl: './line-showcase.component.css'
})
export class LineShowcaseComponent {
  readonly defaultCode = `
    <shimmer-line/>
  `
  readonly widthCode = `
    <shimmer-line [width]="520" [height]="25"/>
  `

  readonly borderRadiusCode = `
    <shimmer-line [borderRadius]="0px"/>
  `

  readonly randomWidthCode = `
    <shimmer-line [isRandomWidth]="true"/>
  `;

  readonly apis: ReadonlyArray<ApiModel> = [
    {
      name: 'width',
      description: 'Width of the line',
      types: [DataTypeEnum.Number, DataTypeEnum.String]
    },
    {
      name: 'height',
      description: 'Height of the line',
      types: [DataTypeEnum.Number, DataTypeEnum.String]
    },
    {
      name: 'borderRadius',
      description: 'Border radius of the line',
      types: [DataTypeEnum.String]
    },
    {
      name: 'isRandomWidth',
      description: 'Random width of the line',
      types: [DataTypeEnum.Boolean]
    }
  ]
}
