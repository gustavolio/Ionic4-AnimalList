import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalInformationPage } from './animal-information';

@NgModule({
  declarations: [
    AnimalInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalInformationPage),
  ],
})
export class AnimalInformationPageModule {}
