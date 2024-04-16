import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-detail-food',
  standalone: true,
  imports: [RouterModule, MatButtonModule,MatCardModule,MatIcon, UpperCasePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './detail-food.component.html',
  styleUrl: './detail-food.component.scss'
})
export class DetailFoodComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, public serviceFood:FoodService){
  }
  route:ActivatedRoute = inject(ActivatedRoute);
  foodId:number = -1;
  food?:Food = {
    id:0,
    name:'',
    description:'', 
    category:'',
    image:'',
    price:0
  }

  ngOnInit(): void {
   
    this.foodId =Number(this.route.snapshot.params['id']);
    this.serviceFood.getOneFood(this.foodId).subscribe({
      next:(value)=> (this.food = value),
      error:(e) => console.error(e),
      complete:()=> console.info('complete'),
    })

  }


}
