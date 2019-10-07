import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadAnimalPage');
  }
  

  cadastrarAnimal(nome, numeracao, sexo, raca):void{
    console.log("Verificando Cadastro: ", nome, " ", numeracao, " ", sexo, " ", raca);
    if(nome === "" || numeracao === "" || sexo === undefined || raca === undefined){
      this.alertDadosInvalidos();
      this.viewCtrl.dismiss();
    } else {
      let animal = {
        "nome": nome,
        "numeracao": numeracao,
        "sexo": sexo,
        "raca": raca
      }

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
