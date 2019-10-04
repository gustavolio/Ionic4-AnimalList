import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { notImplemented } from '@angular/core/src/render3/util';

/**
 * Generated class for the AnimalInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-information',
  templateUrl: 'animal-information.html',
})
export class AnimalInformationPage {

  public animal: {
    nome: "",
    numeracao: "",
    sexo: "",
    raca: ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.animal = navParams.get("animal");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalInformationPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }//fim closeModal

}
