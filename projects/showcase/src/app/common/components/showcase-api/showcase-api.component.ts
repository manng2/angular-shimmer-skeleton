import { Component, input } from '@angular/core';
import { ApiModel } from '../../models/apis.model';

@Component({
  selector: 'app-showcase-api',
  standalone: true,
  imports: [],
  templateUrl: './showcase-api.component.html',
  styleUrl: './showcase-api.component.css'
})
export class ShowcaseApiComponent {
  readonly apis = input.required<ReadonlyArray<ApiModel>>();
}
