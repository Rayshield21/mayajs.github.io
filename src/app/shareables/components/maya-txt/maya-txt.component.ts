import { Component, OnInit, Input } from '@angular/core';
import { highlights } from 'src/lang/fil';
@Component({
  selector: 'app-maya-text',
  templateUrl: './maya-txt.component.html',
  styleUrls: ['./maya-txt.scss']
})
export class mayaTxtComponent implements OnInit {
  @Input() mayaTxt: string
  highlights = highlights
  constructor() { }

  ngOnInit(): void {
  }

}
