import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadAnimalPage } from './cad-animal';

@NgModule({
  declarations: [
    CadAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(CadAnimalPage),
  ],
})
export class CadAnimalPageModule {}
