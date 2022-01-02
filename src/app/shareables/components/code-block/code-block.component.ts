import { Component, OnInit, Input } from '@angular/core';
import { JsonService } from '../../../services/json.service'
@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {
  @Input() code:string
  constructor(private json: JsonService) { }
  directory;
  sourceCode;
  ngOnInit(): void {
    const {directory, srcCode} = this.json.data
    this.directory = directory
    this.sourceCode = srcCode
  }

}
