import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroForm } from '@app/heroes/components/hero-form/models/hero-form-models';
import { HeroItem, Publisher } from '@app/heroes/models/api/heroes-api.models';
import { DeleteHero, GetHeroById, SaveHero } from '@app/heroes/ngxs/heroes.actions';
import { HeroesApiService } from '@app/heroes/services/api/heroes-api.service';
import { HeroesService } from '@app/heroes/services/heroes.service';
import { Select, Store } from '@ngxs/store';
import { filter, Observable, skip, switchMap } from 'rxjs';
import { MatConfirmDialogCustomComponent } from '../../create-hero/components/mat-confirm-dialog-custom/mat-confirm-dialog-custom.component';
import { HeroesPageState } from '@app/heroes/ngxs/heroes.state';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent extends CommonComponent implements OnInit {

  //Hero by Id
  @Select(HeroesPageState.getHeroById) heroById$!: Observable<HeroItem | null | undefined>;

  public heroForm: FormGroup<HeroForm> = new FormGroup({
    id: new FormControl<string>('', { nonNullable: true }),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>('DC Comics'),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];



  constructor(private heroesService: HeroesService,
    private heroesApiService: HeroesApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    public store: Store) {
    super();

    this.observableList.push(
      this.heroById$.pipe(skip(1)).subscribe(hero => {
        console.log(hero)
        if (!hero) this.router.navigateByUrl('/');
        else {
          this.heroForm.patchValue({
            id: hero?.id,
            superhero: hero?.superhero,
            publisher: hero?.publisher,
            alter_ego: hero?.alter_ego,
            first_appearance: hero?.first_appearance,
          });
        }
      })
    )
  }
  ngOnInit(): void {


    this.observableList.push(
      // this.activatedRoute.params
      //   .pipe(
      //     switchMap(({ id }) => this.heroesApiService.getHeroById(id)),
      //   ).subscribe(hero => {
      //     console.log(hero)
      //     this.heroForm.patchValue({
      //       id: hero?.id,
      //       superhero: hero?.superhero,
      //       publisher: hero?.publisher,
      //       alter_ego: hero?.alter_ego,
      //       first_appearance: hero?.first_appearance,
      //       characters: hero?.characters

      //       // "id": "dc-flash",
      //       // "superhero": "Flash",
      //       // "publisher": "DC Comics",
      //       // "alter_ego": "Jay Garrick",
      //       // "first_appearance": "Flash Comics #1",
      //       // "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"

      //     });
      //     console.log(this.heroForm.value)
      //     if (!hero) {
      //       return this.router.navigateByUrl('/');
      //     }

      //     return;
      //   })

      this.activatedRoute.params.subscribe(hero => {
        const id = hero['id']
        this.store.dispatch(new GetHeroById({ id }))
      })
    )

  }
  handleSubmitForm(form: FormGroup<HeroForm>) {
    this.store.dispatch(new SaveHero(form.value as HeroItem)).subscribe((result) => {
      this.showSnackbar(`${form.value.superhero} actualizado!`);
    });
  }
  handleDeleteHero() {
    if (!this.heroForm.value.id || !this.heroForm.value.superhero) throw Error('Hero id is and superhero name are both required');

    const dialogRef = this.dialog.open(MatConfirmDialogCustomComponent, {
      data: this.heroForm.value
    });

    this.observableList.push(
      dialogRef.afterClosed()
        .subscribe(() => {
          this.store.dispatch(new DeleteHero({ id: this.heroForm.value.id as string, superhero: this.heroForm.value.superhero as string }))
        })
    )
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    })
  }
}
