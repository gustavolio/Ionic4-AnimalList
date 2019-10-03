import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-animal',
  templateUrl: 'cad-animal.html',
})
export class CadAnimalPage {

  nome: string;
  numeracao: number;
  sexo: string;
  raca: string;

  arrayAnimal: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayAnimal = navParams.get('animalList')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadAnimalPage');
  }

  cadastrarAnimal():void{
    console.log(arrayAnimal);
  }

}
