import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// COMPONENTS
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { MissionComponent } from "./components/mission/mission.component";
import { VisionComponent } from "./components/vision/vision.component";
import { GettingStartedComponent } from "./components/getting-started/getting-started.component";
import { RoutesComponent } from "./components/routes/routes.component";
import { GistComponent } from "./components/gist/gist.component";
import { WhyMayajsComponent } from "./components/why-mayajs/why-mayajs.component";
import { MethodsComponent } from './components/methods/methods.component';
import { DatabasesComponent } from './components/databases/databases.component';
import { ValidationComponent } from './components/validation/validation.component';
import { RouterComponent } from './components/router/router.component';
import { MiddlewareComponent } from './components/middleware/middleware.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { GamesAPIComponent } from './components/games-api/games-api.component';
import { mayaTxtComponent } from './shareables/components/maya-txt/maya-txt.component';
import { GamesApiP2Component } from './components/games-api-p2/games-api-p2.component';
import { CodeBlockComponent } from './shareables/components/code-block/code-block.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    IntroductionComponent,
    MissionComponent,
    VisionComponent,
    GettingStartedComponent,
    RoutesComponent,
    GistComponent,
    WhyMayajsComponent,
    MethodsComponent,
    DatabasesComponent,
    ValidationComponent,
    RouterComponent,
    MiddlewareComponent,
    GamesAPIComponent,
    mayaTxtComponent,
    GamesApiP2Component,
    CodeBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HighlightJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
