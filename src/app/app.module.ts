import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MessageComponent } from './message/message.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { EmailComponent } from './email/email.component';
import { EventsComponent } from './events/events.component';
import { FormsComponent } from './forms/forms.component';
import { MediaComponent } from './media/media.component';
import { ResourcesComponent } from './resources/resources.component';
import { DonationsComponent } from './donations/donations.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MessageComponent,
    SidenavComponent,
    EmailComponent,
    EventsComponent,
    FormsComponent,
    MediaComponent,
    ResourcesComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
