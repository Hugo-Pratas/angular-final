import {Component, Input, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  @Input() id!: number;
  coments!: any[]

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getComents(this.id).subscribe(data => {
      // @ts-ignore
      this.coments = data.reviews;
    })
  }

}
