import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase.config';
import { ModalComponent } from './componentes/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule],
      
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: SplashScreen},
              { provide:  StatusBar}],
  bootstrap: [AppComponent],
})
export class AppModule {}
