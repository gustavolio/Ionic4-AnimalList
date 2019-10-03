import { Component } from '@angular/core';
import { NavController , ModalController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public animalList: Array<Object> = [];
  public noSearchList: Array<Object> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
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

    this.noSearchList = this.animalList;

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
        this.noSearchList = this.animalList;
        console.log("Item adicionado ao array!!");
      }
    });
  }

  getItems(){
    this.animalList = this.noSearchList.filter((animal) => {
      return animal.nome.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });

  }

  // showOptions(){
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Animal Options',
  //     buttons: [
  //       {
  //         text: 'Editar Informações',
  //         handler: () => {
  //         }
  //       },
  //       {
  //         text: 'Remover',
  //         handler: () => {
  //         }
  //       },
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         handler: () => {

  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }


  showInformation(animal){
    let urlModalInfoAnimal = this.modalCtrl.create("AnimalInformationPage", {animal: animal});
    urlModalInfoAnimal.present();

    urlModalInfoAnimal.onDidDismiss(data => {
      console.log("Teste");
    });
  }
}
