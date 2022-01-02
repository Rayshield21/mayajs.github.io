import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json.service';
import { IRequirements, IFiles, IDirectory } from 'src/app/interfaces';
@Component({
  selector: 'app-games-api',
  templateUrl: './games-api.component.html',
  styleUrls: ['./games-api.component.scss']
})
export class GamesAPIComponent implements OnInit {
  requirements: IRequirements
  files: IFiles
  directory: IDirectory
  constructor(private router:Router, private json:JsonService) { }

  ngOnInit(): void {
    const { files, directory, requirements } = this.json.data
    this.files = files,
    this.directory = directory
    this.requirements = requirements
  }

  gotoPage(value: string) {
    this.router.navigate([`/get-started/${value}`]);
  }

}
