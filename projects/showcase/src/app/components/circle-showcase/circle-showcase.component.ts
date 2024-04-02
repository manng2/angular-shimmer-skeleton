import { Component } from '@angular/core';
import { ShowcaseExampleComponent } from "../../common/components/showcase-example/showcase-example.component";
import { ShimmerCircleComponent } from 'projects/angular-shimmer-skeleton/src/public-api';

@Component({
    selector: 'app-circle-showcase',
    standalone: true,
    templateUrl: './circle-showcase.component.html',
    styleUrl: './circle-showcase.component.css',
    imports: [ShowcaseExampleComponent, ShimmerCircleComponent]
})
export class CircleShowcaseComponent {
  readonly defaultCode = `
    <shimmer-circle/>
  `
  readonly sizeCode = `
    <shimmer-circle [size]="100"/>
  `
}
