import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SeriesComponent } from './series/series.component';
import { ViewComponent } from './view/view.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { ContactComponent } from './contact/contact.component';
import { CdComponent } from './cd/cd.component';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';


const routes: Routes = [

  { path: '', component: MainhomeComponent },
  { path: 'series', component: SeriesComponent },
  
  { path: 'view', component: ViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: HomeComponent },
  { path: 'movieplayer', component: MovieplayerComponent },
  
  { path: 'home', component: MainhomeComponent },
  
  { path: 'wlist', component: WatchlistComponent },
 
  { path: 'cd', component: CdComponent },
  { path: '**', component: MainhomeComponent }
];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);
