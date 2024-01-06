import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childc2pComponent } from './childc2p.component';

describe('Childc2pComponent', () => {
  let component: Childc2pComponent;
  let fixture: ComponentFixture<Childc2pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childc2pComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Childc2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
