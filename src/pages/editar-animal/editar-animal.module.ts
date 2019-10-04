import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarAnimalPage } from './editar-animal';

@NgModule({
  declarations: [
    EditarAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarAnimalPage),
  ],
})
export class EditarAnimalPageModule {}
