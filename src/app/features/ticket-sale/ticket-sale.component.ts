import { Component, OnInit } from '@angular/core';
import { TicketSaleService } from '../../services/ticket-sale.service';
import { TicketSales } from '../../models/tickect-sales.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableColumn, TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-ticket-sale',
  imports: [ TableComponent ],
  templateUrl: './ticket-sale.component.html',
  styleUrl: './ticket-sale.component.scss'
})
export class TicketSaleComponent implements OnInit{
  
  eventId: string | null = null;
  private routeSub!: Subscription;
  list : TicketSales[] = [];
  
  tableColumns: TableColumn[] = [
    { key: 'userId', label: 'User Id' },
    { key: 'purchaseDate', label: 'Purchase Date' },
    { key: 'priceInCents', label: 'Price' },
  ];

  constructor(
    private ticketSaleService: TicketSaleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id');
      this.fetchList();
    });
  }

  fetchList(): void {
    if (this.eventId) {
      this.ticketSaleService.getTicketsByEventId(this.eventId)
        .subscribe((response) => {
          this.list = response;
        });
    }
  }
}
