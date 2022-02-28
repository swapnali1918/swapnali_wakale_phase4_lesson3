import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() item!: Item;
  itemImageUrl = 'assets/teapot.svg';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';

// This component makes a request but it can't actually delete a hero.
@Output() deleteRequest = new EventEmitter<Item>();

delete() {
  this.deleteRequest.emit(this.item);
  this.displayNone = this.displayNone ? '' : 'none';
  this.lineThrough = this.lineThrough ? '' : 'line-through';
}

}