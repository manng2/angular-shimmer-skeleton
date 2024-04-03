import { Component } from '@angular/core';
import { ShowcaseExampleComponent } from '../../common/components/showcase-example/showcase-example.component';
import { ShimmerConversationComponent } from 'projects/angular-shimmer-skeleton/src/public-api';
import { ShowcaseApiComponent } from '../../common/components/showcase-api/showcase-api.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataTypeEnum } from '../../common/models/data-type.enum';

@Component({
  selector: 'app-conversation-showcase',
  standalone: true,
  templateUrl: './conversation-showcase.component.html',
  styleUrl: './conversation-showcase.component.css',
  imports: [
    ShowcaseExampleComponent,
    ShimmerConversationComponent,
    ShowcaseApiComponent,
    MatTabsModule,
  ],
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

  readonly apis = [
    {
      name: 'avatarSize',
      description: 'Size of the avatar',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'nameWidth',
      description: 'Width of the name',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'nameHeight',
      description: 'Height of the name',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'messageWidth',
      description: 'Width of the message',
      types: [DataTypeEnum.Number],
    },
    {
      name: 'messageHeight',
      description: 'Height of the message',
      types: [DataTypeEnum.Number],
    },
  ]
}
