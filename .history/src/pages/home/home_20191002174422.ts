import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  static animalList: Array<Object> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.animalList = [
      {
        "nome": "Reginaldo",
        "numeracao": "0",
        "sexo": "masculino",
        "raça": "pincher"
      },
      {
        "nome": "Adalberto",
        "numeracao": "1",
        "sexo": "masculino",
        "raça": "boxer"
      },
      {
        "nome": "Creuza",
        "numeracao": "2",
        "sexo": "feminino",
        "raça": "poodle"
      },
      {
        "nome": "Elineuza",
        "numeracao": "3",
        "sexo": "feminino",
        "raça": "pincher"
      }
    ]

  }//fim construtor

  cadastrarAnimal(){
    let urlModalCadAnimal = this.modalCtrl.create("CadAnimalPage");
    urlModalCadAnimal.present();

    urlModalCadAnimal.onDidDismiss(data => {
      console.log(data);
    });
  }
}
