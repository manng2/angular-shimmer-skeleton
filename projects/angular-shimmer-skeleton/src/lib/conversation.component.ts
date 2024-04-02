import { Component, input } from '@angular/core';
import { ShimmerCircleComponent } from './circle.component';
import { ShimmerLineComponent } from './line.component';

@Component({
  selector: 'shimmer-conversation',
  template: `
    <div class="shimmer-conversation">
        <shimmer-circle [size]="avatarSize()"></shimmer-circle>
        <div class="shimmer-conversation__right">
            <shimmer-line [width]="nameWidth()" [height]="nameHeight()"></shimmer-line>
            <shimmer-line [width]="messageWidth()" [height]="messageHeight()"></shimmer-line>
        </div>
    </div>
  `,
  styleUrls: ['../styles/conversation.css', '../styles/animation.css'],
  standalone: true,
  imports: [ShimmerCircleComponent, ShimmerLineComponent],
})
export class ShimmerConversationComponent {
  readonly avatarSize = input<number>(40);
  readonly nameWidth = input<number>(100);
  readonly nameHeight = input<number>(12);
  readonly messageWidth = input<number>(200);
  readonly messageHeight = input<number>(10);
}
