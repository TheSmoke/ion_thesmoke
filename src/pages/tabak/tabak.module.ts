import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabakPage } from './tabak';

@NgModule({
  declarations: [
    TabakPage,
  ],
  imports: [
    IonicPageModule.forChild(TabakPage),
  ],
  exports: [
    TabakPage
  ]
})
export class TabakPageModule {}
