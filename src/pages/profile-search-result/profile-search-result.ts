import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubService } from '../../providers/github-service.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username:string;
  user:User;
  repositories: Repository[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private github: GithubService
  ) {
  }

  ionViewWillEnter(){
  this.username = this.navParams.get('username');
    if(this.username){
     this.getUserInfo();
    }
}
getUserInfo(){
  this.github.mockGetUserInformation(this.username).subscribe((user:User)=>{
    this.user = user;
  });
  this.github.mockGetRepositoryList(this.username).subscribe((repositories:Repository[])=>{
    this.repositories = repositories;
  })
}
}
