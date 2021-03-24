import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input()
  title = 'Default Title';

  @Input()
  popover_title = 'Popover Title';

  @Input()
  popover_content = 'Popover Content goes here and here and here';

  @Input()
  top = false;

  @Input()
  bottom = false;

  @Input()
  left = false;

  @Input()
  right = false;

  @Input()
  up = false;

  @Input()
  center = false;

  @Input()
  down = false;

  public get Tooltip(): string[] {
    let mode = '';
    if (this.top) {
      mode = 'top';
    } else if (this.bottom) {
      mode = 'bottom';
    } else if (this.left) {
      mode = 'left';
    } else if (this.right) {
      mode = 'right';
    }
    if (this.center) {
      mode += ' center';
    }else if (this.down) {
      mode += ' down';
    }else if (this.up) {
      mode += ' up';
    }
    return [mode]
  }
}
