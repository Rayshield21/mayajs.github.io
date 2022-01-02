import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() directory: string
  @Input() code: string
  @Input() className: string
  constructor() { }

  ngOnInit(): void {
  }

}
