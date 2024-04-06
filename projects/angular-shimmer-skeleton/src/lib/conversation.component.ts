import { Component, input } from '@angular/core';
import { ShimmerCircleComponent } from './circle.component';
import { ShimmerRectComponent } from './rect.component';

@Component({
  selector: 'shimmer-conversation',
  template: `
    <div class="shimmer-conversation">
        <shimmer-circle [size]="avatarSize()"></shimmer-circle>
        <div class="shimmer-conversation__right">
            <shimmer-rect [width]="nameWidth()" [height]="nameHeight()"></shimmer-rect>
            <shimmer-rect [width]="messageWidth()" [height]="messageHeight()"></shimmer-rect>
        </div>
    </div>
  `,
  styleUrls: ['../styles/conversation.css', '../styles/animation.css'],
  standalone: true,
  imports: [ShimmerCircleComponent, ShimmerRectComponent],
})
export class ShimmerConversationComponent {
  readonly avatarSize = input<number>(40);
  readonly nameWidth = input<number>(100);
  readonly nameHeight = input<number>(12);
  readonly messageWidth = input<number>(200);
  readonly messageHeight = input<number>(10);
}
