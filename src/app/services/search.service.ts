import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  filterItems(items: any[], searchQuery: string, key: string): any[] {
    return items.filter((item) =>
      item[key].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
