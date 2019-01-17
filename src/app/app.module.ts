import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HalloComponent } from './hallo/hallo.component';
import { ProfilComponent } from './profil/profil.component';
import { InlineComponent } from './inline/inline.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HalloComponent,
    ProfilComponent,
    InlineComponent,
    LifecycleComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'hallo',
        component: HalloComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'inline',
        component: InlineComponent
      },
      {
        path: 'lifecycle',
        component: LifecycleComponent
      },
      {
        path: 'event',
        component: EventComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
