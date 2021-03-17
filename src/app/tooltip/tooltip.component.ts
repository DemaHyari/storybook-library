import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
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
  
  public get Left(): string[] {
    let mode = '';
    if (this.top) {
      mode = 'top ';
    } else if (this.bottom) {
      mode = 'bottom ';
    } else if (this.left) {
      mode = 'left ';
    } else if (this.right) {
      mode = 'right ';
    }
    if (this.up) {
      mode += ' up';
    }
    return [mode]
  }

  public get Center(): string[] {
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
    }
    return [mode]
  }

  public get Right(): string[] {
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
    if (this.down) {
      mode += ' down';
    }
    return [mode]
  }
}
