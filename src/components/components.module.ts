import { RepositoriesComponent } from './repositories/repositories.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search-result/search-result.component'; 
import { IonicModule } from 'ionic-angular';


@NgModule({
   declarations : [
      SearchComponent,
      RepositoriesComponent
   ], 
   imports : [
      IonicModule
   ],
   exports : [
      SearchComponent,
      RepositoriesComponent
   ]
})
export class ComponentsModule {}