import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './features/events/events.component';
import { ReportsComponent } from './features/reports/reports.component';
import { TicketSaleComponent } from './features/ticket-sale/ticket-sale.component';

export const routes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '',
        component: LayoutComponent, 
        children: [
            { path: 'events', component: EventsComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'ticketsales/:id', component: TicketSaleComponent }
        ]
    },
];
