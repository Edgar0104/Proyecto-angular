import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebaseConfig)
    ,AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
