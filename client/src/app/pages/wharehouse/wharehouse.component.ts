import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../../components/inputs/search-bar/search-bar.component';
import { SidebarComponent } from '../../components/navigation/sidebar/sidebar.component';
import { WarehouseCardComponent } from '../../components/data-display/warehouse-card/warehouse-card.component';
import { NewStockComponent } from './new-stock/new-stock.component';

@Component({
  selector: 'app-wharehouse',
  standalone: true,
  imports: [RouterLink, SearchBarComponent, SidebarComponent, WarehouseCardComponent, NewStockComponent],
  templateUrl: './wharehouse.component.html',
  styleUrl: './wharehouse.component.css'
})
export class WharehouseComponent {

}
