import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSaleComponent } from './ticket-sale.component';

describe('TicketSaleComponent', () => {
  let component: TicketSaleComponent;
  let fixture: ComponentFixture<TicketSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
