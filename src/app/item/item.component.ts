import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  titleInput!: string;
  moreDeailesButton: boolean = false;

  constructor(private router: Router, private apiService: ApiService) { }
  ngOnInit(): void {
    this.titleInput = this.item.Title
  }

  get formatYear() {
    const year = parseInt(this.item.Year.substring(0, 4));
    const month = parseInt(this.item.Year.substring(4, 6)) - 1;
    const day = parseInt(this.item.Year.substring(6, 8));
    return new Date(year, month, day);

  }


  moreDetails(id: string) {
    this.router.navigate(['/details', id], { state: { parameter: this.item } });

  }
  update() {
    if (this.item.Title != this.titleInput) {
      this.item.Title = this.titleInput;
      this.apiService.updateItem(this.item)
    }
  }
 
  imgUrlError(event: any) {
    event.target.style.display = 'none'; 
    this.moreDeailesButton=!this.moreDeailesButton;
  }
}