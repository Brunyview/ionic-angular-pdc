import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@Component({
  standalone: true,
  selector: 'app-tab1',
  template: `<ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 1 </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <app-explore-container name="Tab 1 page"></app-explore-container>
    </ion-content>`,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
})
export class Tab1Page {
  constructor() {}
}
