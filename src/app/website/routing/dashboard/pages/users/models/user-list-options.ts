import { SortDirection } from '@angular/material/sort';

export class UserListOptions {
  public constructor(
    public sort: string,
    public sortDirection: SortDirection,
    public pageIndex: number,
    public pageSize: number
  ) { }
}