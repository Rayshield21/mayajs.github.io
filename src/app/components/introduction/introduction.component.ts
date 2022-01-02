import { Component, OnInit } from "@angular/core";
import { JsonService } from "src/app/services/json.service";
import { IPackage } from "../../interfaces/";
@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {
  import = `import { MayaJS } from "@mayajs/core";`;
  packages: IPackage[] = []
  constructor(private json: JsonService) {}

  ngOnInit(): void {
    const { packages } = this.json.data
    this.packages = packages
  }
}
