import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input()
  main_text = 'Tooltip Hover';

  @Input()
  hover_text = 'Tooltip Text';

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
