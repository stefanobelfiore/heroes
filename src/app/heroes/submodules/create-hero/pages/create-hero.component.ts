import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroItem, Publisher } from '@app/heroes/models/api/heroes-api.models';
import { HeroesService } from '@app/heroes/services/heroes.service';
import { filter, switchMap } from 'rxjs';
import { HeroesApiService } from '../../../services/api/heroes-api.service';
import { MatConfirmDialogCustomComponent } from '../components/mat-confirm-dialog-custom/mat-confirm-dialog-custom.component';

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
    characters: new FormControl(''),
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
  ) {
    super();
  }
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.observableList.push(
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesApiService.getHeroById(id)),
        ).subscribe(hero => {

          if (!hero) {
            return this.router.navigateByUrl('/');
          }

          this.heroForm.reset(hero);
          return;
        })
    )

  }


  onSubmit(): void {

    if (this.heroForm.invalid) return;

    if (this.heroForm.value.id) {
      this.heroesApiService.updateHero(this.heroForm.value as HeroItem)
        .subscribe(hero => {
          this.showSnackbar(`${hero.superhero} updated!`);
        });

      return;
    }

    this.heroForm.patchValue({ id: crypto.randomUUID() });
    this.heroesApiService.addHero(this.heroForm.value as HeroItem)
      .subscribe(hero => {
        this.router.navigate(['heroes/edit-hero', hero.id]);
        this.showSnackbar(`${hero.superhero} created!`);
      });
  }

  onDeleteHero() {
    if (!this.heroForm.value.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(MatConfirmDialogCustomComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesApiService.deleteHeroById(this.heroForm.value.id as string)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.heroesApiService.deleteHeroById(this.heroForm.value.id as string)
        .subscribe(wasDeleted => {
          if (wasDeleted)
            this.router.navigate(['/heroes/view-heroes']);
        })
    });

  }


  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    })
  }
}
