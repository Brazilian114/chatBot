import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule, MatCheckboxModule , MatIconModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ChatModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
