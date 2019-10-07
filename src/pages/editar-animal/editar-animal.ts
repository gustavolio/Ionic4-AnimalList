import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { notImplemented } from '@angular/core/src/render3/util';

/**
 * Generated class for the EditarAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-animal',
  templateUrl: 'editar-animal.html',
})



export class EditarAnimalPage {

  public animal: {
    nome: "",
    numeracao: "",
    sexo: "",
    raca: "" 
  };

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.animal = JSON.parse(JSON.stringify(this.navParams.get("animal")));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarAnimalPage');
  }

  editarAnimal(nome, numeracao, sexo, raca){
    //Criar função para receber os dados e editar o animal.
    if(nome === "" || numeracao === "" || sexo === undefined || raca === undefined){
      this.alertDadosInvalidos();
      this.viewCtrl.dismiss();
    } else {
      let animal = {
        "nome":nome,
        "numeracao": numeracao,
        "sexo": sexo,
        "raca": raca
      }
      
      console.log("Testando passagem de parametros: ", animal);
      this.viewCtrl.dismiss({animal});
    }//fim else
  }//fim cadastrarAnimal

  closeModal(){
    this.viewCtrl.dismiss();
  }//fim closeModal

  alertDadosInvalidos() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Dados Invalidos!',
      buttons: ['Ok']
    });
    alert.present();
  }//fim alertDadosInvalidos

}
