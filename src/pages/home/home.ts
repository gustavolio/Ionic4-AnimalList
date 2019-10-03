import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public animalList: Array<Object> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.animalList = [
      {
        "nome": "Reginaldo",
        "numeracao": "0",
        "sexo": "masculino",
        "raca": "pincher"
      },
      {
        "nome": "Adalberto",
        "numeracao": "1",
        "sexo": "masculino",
        "raca": "boxer"
      },
      {
        "nome": "Creuza",
        "numeracao": "2",
        "sexo": "feminino",
        "raca": "poodle"
      },
      {
        "nome": "Elineuza",
        "numeracao": "3",
        "sexo": "feminino",
        "raca": "pincher"
      }
    ]

  }//fim construtor

  cadastrarAnimal(){
    let urlModalCadAnimal = this.modalCtrl.create("CadAnimalPage", {animalList: this.animalList});
    urlModalCadAnimal.present();

    urlModalCadAnimal.onDidDismiss(data => {
      if(data === undefined){
        console.log("Adicao Cancelada ou Dados Indefinidos");
      } else {
        //Adiciona um item quando o modal de cadastro fecha
        this.animalList = this.animalList.concat(data.animal);
        console.log("Item adicionado ao array!!");
      }
    });
  }
}
