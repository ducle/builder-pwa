import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BoostrapModule } from './shared/boostrap.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePhotoComponent } from './home-photo/home-photo.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { environment } from '../environments/environment';
import { HeaderGeneralInfoComponent } from './header-general-info/header-general-info.component';
import { HomePhotoGalleryComponent } from './home-photo-gallery/home-photo-gallery.component';
import { CardService } from './services/card.service';
import { RemovesrcPipe } from './pipes/removesrc.pipe';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { YearPipe } from './pipes/year.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  slidesPerView: 1,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePhotoComponent,
    HomeCardComponent,
    HomeFeaturesComponent,
    HomeMapComponent,
    HomeContactComponent,
    HeaderGeneralInfoComponent,
    HomePhotoGalleryComponent,
    RemovesrcPipe,
    FormatTimePipe,
    YearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoostrapModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey
    }),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    CardService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
