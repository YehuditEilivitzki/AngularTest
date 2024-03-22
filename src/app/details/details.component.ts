import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item!: Item;
  parameter!: any;
  constructor(private router: Router, private location: Location) { }
  ngOnInit(): void {
    this.parameter = this.location.getState();
    this.item = this.parameter.parameter;
  }
  get formatYear() {
    const year = parseInt(this.item.Year.substring(0, 4));
    const month = parseInt(this.item.Year.substring(4, 6)) - 1; 
    const day = parseInt(this.item.Year.substring(6, 8)); 
    return new Date(year, month, day);
  
}
  back() {
    this.router.navigate(['homePage']);
  }
}
