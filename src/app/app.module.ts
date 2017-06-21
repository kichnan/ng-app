import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WorkspaceComponent } from './workspace/workspace.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FunctionsModule } from './functions/functions.module';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    WorkspaceComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FunctionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
