import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.css']
})
export class DetailButtonComponent {

  @Input() preparation: any
  @Input() cuisson: any
  @Input() difficulte: any
  @Input() cout: any


  affichage="";

  surClick(param: string) {

    this.affichage = param;
  }
}
