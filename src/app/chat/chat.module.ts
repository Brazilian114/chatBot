//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chat2Component } from './chat2/chat2.component';
import {MatButtonModule, MatCheckboxModule , MatIconModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ChatDialogComponent, Chat2Component],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [ ChatDialogComponent , Chat2Component],   
   providers:[ChatService],
  
})
export class ChatModule { }
