import { Repository } from '../models/repository.interface';
import { User_Mocks } from './user.mocks';

const repositoryList : Repository[] = [
   {
      name:'Ionic 3 Camera',
      description: 'this is repository of the best',
      owner: User_Mocks[0]
   },
   {
      name:'Ionic 3 sms',
      description: 'this is repository of the best',
      owner: User_Mocks[0]
   },
   {
      name:'Ionic 3 geo',
      description: 'this is repository of the best',
      owner: User_Mocks[1]
   },
   {
      name:'Ionic 3 vib',
      description: 'this is repository of the best',
      owner: User_Mocks[1]
   }
];


export const Repository_Mocks = repositoryList;