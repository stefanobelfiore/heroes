import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroItem, Publisher } from '@app/heroes/models/api/heroes-api.models';
import { HeroesService } from '@app/heroes/services/heroes.service';
import { filter, switchMap } from 'rxjs';
import { HeroesApiService } from '../../../services/api/heroes-api.service';
import { MatConfirmDialogCustomComponent } from '../components/mat-confirm-dialog-custom/mat-confirm-dialog-custom.component';
import { Store } from '@ngxs/store';
import { SaveHero } from '@app/heroes/ngxs/heroes.actions';
import { HeroForm } from '@app/heroes/components/hero-form/models/hero-form-models';

@Component({
  selector: 'app-create-heroe',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent extends CommonComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>('DC Comics'),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    private heroesService: HeroesService,
    private heroesApiService: HeroesApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    public store: Store
  ) {
    super();
  }
  ngOnInit(): void {
    // if (!this.router.url.includes('edit')) return;

    // this.observableList.push(
    //   this.activatedRoute.params
    //     .pipe(
    //       switchMap(({ id }) => this.heroesApiService.getHeroById(id)),
    //     ).subscribe(hero => {

    //       if (!hero) {
    //         return this.router.navigateByUrl('/');
    //       }

    //       this.heroForm.reset(hero);
    //       return;
    //     })
    // )

  }
  handleSubmitForm(form: FormGroup<HeroForm>) {
    if (this.heroForm.invalid) return;
    this.store.dispatch(new SaveHero(form.value as HeroItem));
  }

}
