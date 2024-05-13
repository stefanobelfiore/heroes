import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { CommonComponent } from './common.component';

describe('CommonComponent', () => {
  let component: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El unsuscribe() se tiene que llamar correctamente con el ngDestroy()', () => {
    component.observableList = [
      new Subscription(),
      new Subscription(),
      new Subscription(),
    ];
    const subscription = spyOn(component.observableList[0], 'unsubscribe');
    const subscription2 = spyOn(component.observableList[1], 'unsubscribe');
    const subscription3 = spyOn(component.observableList[2], 'unsubscribe');

    component.ngOnDestroy();

    expect(subscription).toHaveBeenCalledTimes(1);
    expect(subscription2).toHaveBeenCalledTimes(1);
    expect(subscription3).toHaveBeenCalledTimes(1);
  });
});