import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  listItems = ITEMS;
  @Input() items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
