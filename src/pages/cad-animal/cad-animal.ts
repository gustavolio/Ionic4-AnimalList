import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadAnimalPage');
  }
  

  cadastrarAnimal(nome, numeracao, sexo, raca):void{

    let animal = {
      "nome":nome,
      "numeracao": numeracao,
      "sexo": sexo,
      "raca": raca
    }

    this.viewCtrl.dismiss({animal});
    console.log("Dados capturados dos campos de textp...");
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
