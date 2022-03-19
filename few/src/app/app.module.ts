import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from 'src/app/sd/sc.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PupdateComponent } from './pupdate/pupdate.component';
import { ViewComponent } from './view/view.component';
import { SeriesComponent } from './series/series.component';
import { CustlayoutComponent } from './custlayout/custlayout.component';
import { routing } from './approuting';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

import { CommonLayComponent } from './common-lay/common-lay.component';

import { MainhomeComponent } from './mainhome/mainhome.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { ContactComponent } from './contact/contact.component';
import { CdComponent } from './cd/cd.component';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';

import { IntercepService } from './loader/intercep.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PupdateComponent,
    ViewComponent,
    SeriesComponent,
    CustlayoutComponent,
    
    CommonLayComponent,
    
    MainhomeComponent,
         
         WatchlistComponent,
         ContactComponent,
         CdComponent,
         MovieplayerComponent,
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],

  providers: [ServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: IntercepService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
