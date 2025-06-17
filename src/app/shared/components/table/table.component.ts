import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  imports: [FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T extends object> implements OnInit, OnChanges {
  @Input() data: T[] = [];
  @Input() columns: TableColumn[] = [];

  @Input() tableTitle: string = '';

  @ContentChild('actionsColumn') actionsColumnTemplate: TemplateRef<any> | undefined;
  @ContentChild('columnTemplate') columnTemplate: TemplateRef<any> | undefined;

  paginatedData: T[] = [];
  filteredData: T[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  itemsPerPageOptions: number[] = [5, 10, 25, 50];
  totalItems: number = 0;
  totalPages: number = 0;

  filterText: string = '';

  pagesToShow: number = 5;

  constructor() { }

  ngOnInit(): void {
     this.applyFilterAndPagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['columns']) {
      this.currentPage = 1;
      this.filterText = ''; // Opcional: resetear filtro al cambiar datos
      this.applyFilterAndPagination();
    }
  }

  applyFilter(): void {
    const filter = this.filterText.toLowerCase().trim();

    if (!filter) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item => {
        const itemString = this.columns
           .map(col => this.getItemValue(item, col.key))
           .filter(value => value !== null && value !== undefined)
           .map(value => String(value).toLowerCase())
           .join(' ');

        return itemString.includes(filter);
      });
    }

    this.currentPage = 1;
    this.updatePagination();
  }

  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  updatePagination(): void {
    this.totalItems = this.filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
        this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
         this.currentPage = 1;
    }
    this.applyPagination();
  }


  applyFilterAndPagination(): void {
    this.applyFilter(); 
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyPagination();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages);
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  get visiblePageNumbers(): number[] {
    if (this.totalPages === 0) {
      return [];
    }

    let startPage: number;
    let endPage: number;

    if (this.totalPages <= this.pagesToShow) {
      startPage = 1;
      endPage = this.totalPages;
    } else {
      const half = Math.floor(this.pagesToShow / 2);
      startPage = Math.max(1, this.currentPage - half);
      endPage = Math.min(this.totalPages, startPage + this.pagesToShow - 1);

     if (endPage - startPage + 1 < this.pagesToShow) {
       startPage = Math.max(1, endPage - this.pagesToShow + 1);
      }
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

   getItemValue(item: T, key: string): any {
     const value = item[key as keyof T];
     return value !== null && value !== undefined ? value : '';
   }
}
