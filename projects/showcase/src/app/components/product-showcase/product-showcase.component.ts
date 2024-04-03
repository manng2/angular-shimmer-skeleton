import { Component } from '@angular/core';
import { ShimmerProductComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [
    ShimmerProductComponent,
    ShowcaseApiComponent,
    ShowcaseExampleComponent,
    MatTabsModule,
  ],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.css',
})
export class ProductShowcaseComponent {
  readonly defaultCode = `
    <shimmer-product/>
  `

  readonly avatarWidthCode = `
    <shimmer-product [avatarWidth]="250"/>
  `

  readonly firstLineWidthCode = `
    <shimmer-product [firstLineWidth]="250"/>
  `

  readonly secondLineWidthCode = `
    <shimmer-product [secondLineWidth]="250"/>
  `

  readonly apis = [
    {
      name: 'avatarWidth',
      description: 'Width of the avatar image',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'firstLineWidth',
      description: 'Width of the first line',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'secondLineWidth',
      description: 'Width of the second line',
      types: [DataTypeEnum.Number],
    }
  ]
}
