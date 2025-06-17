import { Component } from '@angular/core';
import { TableColumn, TableComponent } from '../../shared/components/table/table.component';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [ 
    TableComponent, 
    FormsModule, 
    CommonModule,
    RouterModule 
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  list: Event[] = [];
  days: number = 30;

  tableColumns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'startsOn', label: 'Starts On' },
    { key: 'endsOn', label: 'Ends On' },
    { key: 'location', label: 'Location' },
  ];

  constructor(
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList(): void {
    this.eventService.get(this.days).subscribe((response) => {
      this.list = response;
    });
  }

  viewClient(id: string): void {
  }

  onChange(value: any): void {
    this.days = value.target.value;
    console.log('Days changed to:', this.days);
    this.fetchList();
  }
}
