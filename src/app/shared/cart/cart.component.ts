import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() drinkItem: any;
  @Output() addCartEvent = new EventEmitter();

  removeItem(drink: any) {
    this.addCartEvent.emit(drink); //ripassa il parametro al padre
  }
}
