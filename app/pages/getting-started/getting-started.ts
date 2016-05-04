import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {ItemService} from '../services/ItemService';
import {LocationPage} from '../location/location';


@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage implements OnInit{
  searchQuery:string = "";
  items: any[];
  errorMessage: string;
  
  constructor(private _itemService: ItemService, private nav: NavController) {
  }
  
  ngOnInit(): void{
    this._itemService.getItems()
    .subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    );
  }
  
  getItems(search: any): void{
    console.log(search);
  }
  
  navigateToDetail(item: any): void{
    this.nav.push(LocationPage, {item:item});
  }
}
