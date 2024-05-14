import { Component } from '@angular/core';
import { LoaderService } from './core/services/loading-request/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loaderService: LoaderService) { }
}
