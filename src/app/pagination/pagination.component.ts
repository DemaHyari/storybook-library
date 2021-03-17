import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent{
  @Input()
  active = false;

  @Input()
  label = '55';

  public get classes(): string[] {
    const mode = this.active ? 'active' : '';
    return [mode];
  }
}
