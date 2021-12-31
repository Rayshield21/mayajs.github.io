import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-api',
  templateUrl: './games-api.component.html',
  styleUrls: ['./games-api.component.scss']
})
export class GamesAPIComponent implements OnInit {
  requirements = [
    {
      content: "MongoDB Installed for our database"
    },
    {
      content: "Postman for testing purposes" 
    },
    {
      content: "NodeJS and Node Package Manage(NPM) Installed"
    },
  ]

  files = [
    {
      name: "package.json",
      description: "contains basic information about your nodeJS project such as versions, dependencies and scripts."
    },
    {
      name: "package.lock.json",
      description: "locks your dependencies' version which makes reinstallation easier.",
    },
    {
      name: "tsconfig.json",
      description: "Defines the root of your Typescript Project. You can set your typescript compiler configuration here",
    },
    {
      name: ".gitignore",
      description: "determines which files and folders to be ignored by Git."
    },
    {
      name: "README.md",
      description: "Your cheat sheet for your cli commands. You can modify this or keep it for your reference."
    },
    {
      name: "src/controllers",
      description: "A folder where you put all your API controllers and services."
    },
    {
      name: "src/models",
      description: " A folder where you put all your schemas/models"
    },
    {
      name: "src/databases/mongo.ts",
      description: "Your MongoDB config which is called upon the built-in by the MayaJS Module called MongoDBModule to create a connection to MongoDB"
    },
    {
      name: 'src/environments/index.ts',
      description: "Your environmental variables config"
    },
    {
      name: "src/app.controller.ts",
      description: "Your app root routes."
    },
    {
      name: "src/app.module.ts",
      description: "Your container for all your modules through out the project. You will set your global imports like the Routing Modules and MongoDbModules in this file."
    },
    {
      name: "src/app.routing.module",
      description: "Your app routing file. You will set up your main route here. More details will be explained later on this walkthrough"
    },
    {
      name: "src/index.ts",
      description: "Responsible for bootstrapping/bundling all your RestAPI modules into the AppModule. Preferably, you would want to set your common middlewares like cors, body-parser, multer, etc. in this file. You can optionally set a different listening port for your MayaJS server as well."
    }
  ]

  constructor(public router:Router ) { }

  ngOnInit(): void {
  }

  gotoPage(value: string) {
    this.router.navigate([`/get-started/${value}`]);
  }

}
