import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input()
  label = 'Tab';

  @Input()
  closable = false;

  @Input()
  icon = false;

  @Input()
  size: 'small' | 'medium' | 'large' | 'pane' = 'medium';

  @Input()
  active = false
  public get classes(): string[] {
    let mode = this.active ? 'active' : 'inactive';
    return ['tab', this.size, mode]
  }
}
