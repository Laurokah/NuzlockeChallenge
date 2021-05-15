import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaughtPokemonEditComponent } from './caught-pokemon-edit.component';

describe('CaughtPokemonEditComponent', () => {
  let component: CaughtPokemonEditComponent;
  let fixture: ComponentFixture<CaughtPokemonEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaughtPokemonEditComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaughtPokemonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
