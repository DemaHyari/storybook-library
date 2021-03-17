import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-confirm',
  templateUrl: './pop-confirm.component.html',
  styleUrls: ['./pop-confirm.component.scss']
})
export class PopConfirmComponent {
  @Input()
  vertical = false;

  @Input()
  horizontal = false;

  @Input()
  caption = 'Are you sure to delete this task?' 

}
