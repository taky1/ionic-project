import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtuPage } from './etu.page';

describe('EtuPage', () => {
  let component: EtuPage;
  let fixture: ComponentFixture<EtuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
