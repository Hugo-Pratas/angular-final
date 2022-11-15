import {Component, Input, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-host-detail',
  templateUrl: './host-detail.component.html',
  styleUrls: ['./host-detail.component.scss']
})
export class HostDetailComponent implements OnInit {

  @Input() id!: number
  host!: any;

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getHost(this.id).subscribe(data => {
      // @ts-ignore
      this.host = data;
      console.log(this.host)
    })
  }

}
