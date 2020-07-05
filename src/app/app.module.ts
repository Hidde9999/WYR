import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { WyrComponent } from './container/wyr/wyr.component';
import { ResultComponent } from './container/wyr/result/result.component';
import {WyrService} from './wyr.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    WyrComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
