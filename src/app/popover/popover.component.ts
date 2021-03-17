import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input()
  title = 'Title';

  @Input()
  popover_title = 'Popover Title';

  @Input()
  popover_content = 'Popover Title';
}
