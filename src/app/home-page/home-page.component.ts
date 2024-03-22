import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Item } from '../item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data!: Item[];
  filterItems!: Item[];
  typeCounts!: Record<string, number>;
  typeList!: string[];
  searchValue: string = "";
  isAscending: boolean = false;
  gridDisplay: boolean = false;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getData();
  }

  typeCount() {
    this.typeCounts = {}
    this.data.forEach(obj => {
      if (this.typeCounts[obj.Type]) {
        this.typeCounts[obj.Type]++;
      } else {
        this.typeCounts[obj.Type] = 1;
      }
    });
    this.typeList = Object.keys(this.typeCounts);
  }
  getData() {
    this.apiService.getData().subscribe(x => {
      this.data = x.results;
      this.filterItems = this.data;
      this.typeCount();
      this.isAscending = false;
      this.sort()
    }, (error) => {
      alert( "An error occurred while requesting the data")
    }
  );
  }

  clear() {
    this.searchValue = "";
  }
  sort() {
    this.isAscending = !this.isAscending;
    return this.data.sort((a, b) => {
      if (this.isAscending) {
        return a.Title.localeCompare(b.Title);
      } else {
        return b.Title.localeCompare(a.Title);
      }
    });
  }
  search() {
    this.filterItems = this.data.filter(item =>
      item.Title.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      item.Year.toString().includes(this.searchValue)
    );
  }
  changeDisplay() {
    this.gridDisplay = !this.gridDisplay
  }
  filterData(type: string) {
    this.filterItems = this.data.filter(x => x.Type == type);
  }
}
