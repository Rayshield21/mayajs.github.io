import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maya-txt',
  templateUrl: './maya-txt.component.html',
  styleUrls: ['./maya-txt.scss']
})
export class mayaTxtComponent implements OnInit {
  @Input() mayaTxt: string
  mayaTerms = [
    {
      name: "MayaJS",
      switchValue: 'maya'
    },
    {
      name: "@mayajs/core",
      switchValue: 'core'
    },
    {
      name: "@mayajs/common",
      switchValue: 'common'
    },
    {
      name: "@mayajs/router",
      switchValue: 'router'
    },
    {
      name: "MayaJS CLI",
      switchValue: 'cli'
    },
    {
      name: "@mayajs/mongo",
      switchValue: 'mongo'
    },
    {
      name: "@mayajs/sql",
      switchValue: 'sql'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
