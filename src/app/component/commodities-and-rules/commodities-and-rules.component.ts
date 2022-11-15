import {Component, Input, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";


@Component({
  selector: 'app-commodities-and-rules',
  templateUrl: './commodities-and-rules.component.html',
  styleUrls: ['./commodities-and-rules.component.scss']
})
export class CommoditiesAndRulesComponent implements OnInit {

  @Input() id!: number;
  images = [
    {
      name: "airConditioner",
      src: "../../../assets/ac.svg"
    },
    {
      name: "petsAllowed",
      src: "../../../assets/dog.svg"
    },
    {
      name: "fireplace",
      src: "../../../assets/fireplace.svg"
    },
    {
      name: "microwave",
      src: "../../../assets/microwave.svg"
    },
    {
      name: "smokingAllowed",
      src: "../../../assets/smoking.svg"
    },
    {
      name: "tv",
      src: "../../../assets/tv.svg"
    },
    {
      name: "washingMachine",
      src: "../../../assets/washer.svg"
    },
    {
      name: "wifi",
      src: "../../../assets/wifi.svg"
    }]
  greyImagesSrc: string[] = [];
  imagesSrc: string[] = [];

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getHouseFeatures(this.id).subscribe(data => {
      // @ts-ignore
      this.logFeatures(data.features)
    })
  }

  logFeatures(features: any) {
    for (const image of this.images) {
      if (features.indexOf(image.name) !== -1) {
        this.imagesSrc.push(image.src)
      } else {
        this.greyImagesSrc.push(image.src)
      }
    }
  }

}

