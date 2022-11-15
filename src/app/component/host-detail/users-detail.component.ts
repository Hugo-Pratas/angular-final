import {Component, Input, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-host-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  @Input() id!: number
  @Input() isHost?: boolean
  comentsIsempty = false
  data!: any;

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    if (this.isHost) {
      this._service.getHost(this.id).subscribe(data => {
        // @ts-ignore
        this.data = data;
      })
    } else {
      this._service.getComents(this.id).subscribe(data => {
        // @ts-ignore
        this.data = data.reviews;
        // @ts-ignore
        if (!this.data.length > 0) {
          this.comentsIsempty = true;
        }
      })
    }
  }

}
