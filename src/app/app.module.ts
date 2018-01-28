import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//when testing on device, comment out this next line
// import {CameraMock} from './camera.mock';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //for testing on device
    Camera

    //for testing on computer
    // {provide: Camera, useClass: CameraMock}
  ]
})
export class AppModule {}
