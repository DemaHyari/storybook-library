import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  toggleEvent = new EventEmitter();
  items = [0, 1, 2];
  @Input()
  border = false;

  @Input()
  order_base = false;

  @Input()
  selected = false;

  checked = true;
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  public get classes(): string[] {
    let mode = this.border ? 'border' : '';
    let order = this.order_base ? 'order-base' : '';
    let select = this.selected ? 'selected' : '';
    return [this.size, mode, order, select];
  }

  selectAll() {
    let items = document.getElementsByName('item');
    console.log(items);
    for(let item in items){
      /*if(item.type = 'checkbox'){
        item.checked = true;
      }*/
    }
  }
}
