import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDashboardComponent } from './clients-dashboard.component';

describe('ClientsDashboardComponent', () => {
  let component: ClientsDashboardComponent;
  let fixture: ComponentFixture<ClientsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDashboardComponent]
    });
    fixture = TestBed.createComponent(ClientsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
