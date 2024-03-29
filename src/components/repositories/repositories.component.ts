import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.interface';
 

@Component({
   selector:'repositories-component',
   templateUrl: 'repositories.component.html'
})
export class RepositoriesComponent {
   @Input() repository: Repository;
}