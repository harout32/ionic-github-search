// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User_Mocks } from '../mocks/user.mocks';
import { User } from '../models/user.interface';

import{ Repository_Mocks } from '../mocks/repository.mocks';
/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubService {

  constructor() {
    console.log('Hello GithubProvider Provider');
  }
mockGetUserInformation(username:string): Observable<User>{
  return Observable.of(User_Mocks.filter(user => user.name === username)[0]);
}
mockGetRepositoryList(username:string){
  return Observable.of(Repository_Mocks.filter(repository => repository.owner.name === username ));
}
}
