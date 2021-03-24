import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablee',
  templateUrl: './tablee.component.html',
  styleUrls: ['./tablee.component.scss']
})
export class TableeComponent {
  items = [0, 1, 2];
  
  @Input()
  border = false;

  @Input()
  order_base = false;

  @Input()
  selected = false;

  checked = this.onChecked();
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  public get classes(): string[] {
    let mode = this.border ? 'border' : '';
    let order = this.order_base ? 'order-base' : '';
    let select = this.selected ? 'selected' : '';
    return [this.size, mode, order, select];
  }

  onChecked() {
    /*let checkBox = parseInt((<HTMLInputElement>document.getElementById("test")).value);
    console.log(checkBox);
    return true;*/
  }

  selectAll() {
    /*let items = document.getElementsByName('item');
    console.log(items);
    for(let item in items){
      //item = true;
    }

    for(let i = 0; i< items.length; i++){
      if(items[i].type = 'checkbox'){
        items[i].checked = true;
      }
    }
    */
  }
}
