import { Route } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodsComponent } from './foods.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';

export default [
  {
    path: 'food-list',
    component: FoodListComponent,
    title:'Lista de comida'
  },
  {
    path:'form',
    component:FoodFormComponent,
    title:'Crear comida'
  },
  {
    path:'details-food/:id',
    component:DetailFoodComponent,
    title:'Detalles'
  },
  {
    path:'form/:id',
    component:FoodFormComponent,
    title:'Actualizar comida'
  }

] satisfies Route[];
