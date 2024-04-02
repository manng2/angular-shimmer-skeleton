import { Component } from '@angular/core';
import { ShowcaseExampleComponent } from "../../common/components/showcase-example/showcase-example.component";
import { ShimmerConversationComponent } from 'projects/angular-shimmer-skeleton/src/public-api';

@Component({
    selector: 'app-conversation-showcase',
    standalone: true,
    templateUrl: './conversation-showcase.component.html',
    styleUrl: './conversation-showcase.component.css',
    imports: [ShowcaseExampleComponent, ShimmerConversationComponent]
})
export class ConversationShowcaseComponent {
  readonly defaultCode = `
    <shimmer-conversation/>
  `;

  readonly avatarSizeCode = `
    <shimmer-conversation [avatarSize]="64"/>
  `;

  readonly nameWidthCode = `
    <shimmer-conversation [nameWidth]="250"/>
  `;

  readonly nameHeightCode = `
    <shimmer-conversation [nameHeight]="20"/>
  `;

  readonly messageWidthCode = `
    <shimmer-conversation [messageWidth]="300"/>
  `;

  readonly messageHeightCode = `
    <shimmer-conversation [messageHeight]="15"/>
  `;
}
