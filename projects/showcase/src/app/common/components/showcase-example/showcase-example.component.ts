import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-showcase-example',
  standalone: true,
  imports: [],
  templateUrl: './showcase-example.component.html',
  styleUrl: './showcase-example.component.css'
})
export class ShowcaseExampleComponent {
  readonly code = input.required<string>();
  readonly title = input.required<string>();

  readonly isShownCode = signal<boolean>(false);
}
