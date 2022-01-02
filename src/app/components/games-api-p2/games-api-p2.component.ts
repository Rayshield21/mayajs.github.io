import { Component, OnInit } from "@angular/core";
import { IComponent, IComponents, IDirectory } from "src/app/interfaces";
import { JsonService } from "src/app/services/json.service";
@Component({
  selector: "app-games-api-p2",
  templateUrl: "./games-api-p2.component.html",
  styleUrls: ["./games-api-p2.component.scss"],
})
export class GamesApiP2Component implements OnInit {
  components: IComponents
  directory: IDirectory
  constructor(private json: JsonService) {}

  ngOnInit(): void {
    const { components, directory } = this.json.data
    this.components = components.filter((component:IComponent) => component.name == 'service' || component.name == "controller")
    this.directory = directory
  }
}
