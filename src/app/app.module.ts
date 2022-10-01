import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { HomeComponent } from './component/home/home.component';
import { TecnologiesComponent } from './component/tecnologies/tecnologies.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyContentComponent } from './component/body-content/body-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutMeComponent,
    HomeComponent,
    TecnologiesComponent,
    FooterComponent,
    BodyContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
