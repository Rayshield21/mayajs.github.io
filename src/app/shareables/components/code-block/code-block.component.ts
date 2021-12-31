import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {
  @Input() code:string
  index = `
    import { configServer } from \"@mayajs/core\";
    import { AppModule } from \"./app.module\";
    import cors from \"cors\";
    import bodyParser from \"body-parser\";

    configServer(3333)
      .usePlugins([
        bodyParser,
        cors
        // Add plugins or middlewares here
        // i.e. CORS, body-parser, multer and etc...
      ])
      .bootstrapModule(AppModule);
  `
  service = `
    import { Service } from \"@mayajs/core\";
    import { MongoDbServices } from \"@mayajs/mongo\";

    @Service()
    export class SampleServices {
      get model() {
        const db = this.mongo.database(\"main\");
        return db.instance.model(\"Sample\");
      }

      constructor(private mongo: MongoDbServices) {}
    }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
