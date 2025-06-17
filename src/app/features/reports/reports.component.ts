import { Component } from '@angular/core';
import { HighSales } from '../../models/high-sales.model';
import { TicketSaleService } from '../../services/ticket-sale.service';

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  
  listHighSalesByAmount: HighSales[] = [];
  listHighSalesByPrice: HighSales[] = [];

  constructor(
    private ticketSaleService: TicketSaleService
  ) {}

  ngOnInit(): void {
    this.fetchListHighSalesByAmount();
    this.fetchListHighSalesByPrice();
  }

  fetchListHighSalesByAmount(): void {
    this.ticketSaleService.getHighestSellingByAmount()
    .subscribe((response) => {
      this.listHighSalesByAmount = response;
    });
  }

  fetchListHighSalesByPrice(): void {
    this.ticketSaleService.getHighestSellingByPrice()
    .subscribe((response) => {
      this.listHighSalesByPrice = response;
    });
  }

  // Format the price above to USD using the locale, style, and currency.
  USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
