import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './core/services/loading-request/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  constructor(public loaderService: LoaderService, private cdRef: ChangeDetectorRef,) { }


  ngAfterViewChecked() {
    this.setSpinnerOnOff()
    this.cdRef.detectChanges();
  }



  setSpinnerOnOff() {
    const timeOut = setTimeout(() => {
      this.loaderService.isLoading.set(this.loaderService.isLoading())
    }, 100)
    if (this.loaderService.isLoading() === false) {
      clearTimeout(timeOut)
    }
  }
}
