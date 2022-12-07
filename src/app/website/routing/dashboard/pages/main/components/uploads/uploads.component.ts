import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { TableOptions } from 'src/app/website/models';
import { Upload } from 'src/app/website/routing/dashboard/pages/main/models';

@Component({
  selector: 'app-dashboard-main-uploads',
  templateUrl: 'uploads.component.html',
  styleUrls: [ 'uploads.component.css' ]
})

export class UploadsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'fileUrl', 'actions'];

  @Input() data: Upload[] = [];
  @Input() resultsLength: number = 0;

  @Output() onChange = new EventEmitter<TableOptions>();
  @Output() onDelete = new EventEmitter<any>();

  @ViewChild(MatTable) table: MatTable<Upload>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private uploadsListOptions: TableOptions = new TableOptions('', '', 0, 0);

  ngAfterViewInit() {
    this.onChangeEvent();

    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.onChangeEvent();
    });

    this.paginator.page.subscribe(() => {
      this.onChangeEvent();
    });
  }

  onChangeEvent() {
    this.uploadsListOptions.sort = this.sort.active;
    this.uploadsListOptions.sortDirection = this.sort.direction;
    this.uploadsListOptions.pageIndex = this.paginator.pageIndex;
    this.uploadsListOptions.pageSize = this.paginator.pageSize;

    this.onChange.emit(this.uploadsListOptions);
  }

  onDeleteEvent(id: number, name: string) {
    this.onDelete.emit({id, name});
  }
}