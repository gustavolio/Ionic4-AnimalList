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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadAnimalPage');
  }

  cadastrarAnimal():void{
    console.log(this.nome);
    console.log(this.numeracao);
    console.log(this.sexo);
    console.log(this.sexo);
  }

}
