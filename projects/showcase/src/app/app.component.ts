import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  navItems: ReadonlyArray<{
    name: string;
    path: string;
  }> = [
    {
      name: 'Line',
      path: 'line',
    },
    {
      name: 'Circle',
      path: 'circle',
    },
    {
      name: 'Table',
      path: 'table',
    },
    {
      name: ' Conversation',
      path: 'conversation',
    },
  ];
}
