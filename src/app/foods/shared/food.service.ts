import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  API_URL:string= '';

  menu:Food[] = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Hawaina',
      category: 'food',
      image: 'https://assets.unileversolutions.com/recipes-v2/244028.jpg',
      price: 250

    },
    {
      id: 2,
      name: 'Hamburguesa',
      description: 'Sencilla',
      category: 'food',
      image: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/e8ad4c6/2147483647/strip/true/crop/672x672+331+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ffa%2F68%2Fb5133d9f4eaf91738f36c7afcf59%2Fhamburguesas-estilo-texas-receta-facil-y-rapida.jpeg',
      price: 218

    },
    {
      id: 3,
      name: 'Coca-Cola',
      description: 'Regular',
      category: 'drink',
      image: 'https://chedrauimx.vtexassets.com/arquivos/ids/22591991-800-auto?v=638362937686430000&width=800&height=auto&aspect=true',
      price: 25

    },
    {
      id: 4,
      name: 'Agua',
      description: 'Natural',
      category: 'drink',
      image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750179166615L.jpg',
      price: 48

    },
    {
      id: 5,
      name: 'Dona',
      description: 'Caramelo',
      category: 'food',
      image: 'https://bakemark.com/wp-content/uploads/2020/04/IMG_1211-1440x810.jpg',
      price: 98

    },
    {
      id: 6,
      name: 'Pollo',
      description: 'Pieza',
      category: 'food',
      image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/82313088e5929f00dc312b7d48d60e36.jpg?itok=nxvSO6PG',
      price: 55

    },
    {
      id: 7,
      name: 'Tacos Al Pastor',
      description: 'Orden de 3',
      category: 'food',
      image: 'https://cdn7.kiwilimon.com/recetaimagen/13996/640x640/6330.jpg.webp',
      price: 98

    },
    {
      id: 8,
      name: 'Tamal',
      description: 'De cerdo',
      category: 'food',
      image: 'https://www.elfinanciero.com.mx/resizer/MJ5UxMcTlarvSQQQawTuWh4w_Ko=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/MADPRAT5A5CMBLWFWYCUF7IW6I.jpeg',
      price: 98

    },
  ]


  constructor(private http:HttpClient) {
    this.API_URL = `${environment.API_URL}`
  }

  //funciona para obtener todas las comidas
  public getAll():Observable<Food[]>{
    return this.http.get<Food[]>(this.API_URL+'food/all');
  }

  //Funcion para agregar una comida
  public addFood(food:Food):Observable<Food>{
     return this.http.post<Food>(this.API_URL+'food/save',food);
  }

  public getOneFood(id:number):Observable<Food>{
    return this.http.get<Food>(this.API_URL+'food/find/'+id);
  }

  public deleteFood(deleteFood:Food):Observable<unknown>{
    return this.http.delete(this.API_URL + 'food/delete/'+deleteFood.id);
  }

  /*public getAllFoods(): Food[] {
    return this.menu;
    //return this.http.get<Food[]>('');
  }


  //Regresa una comida
  public getOne(id:number) :Food | undefined {
    return this.menu.find(item =>item.id === id );
  }*/

  /*public addFood(food: Food) {
    this.menu.push(food);
  }*/

  /*public updateFood(newFood: Food) {
    this.menu.forEach((item, index) => {
      if (item.id == newFood.id) {
        this.menu[index] = newFood;
      }
    });
  }

  public deleteFood(deletefood: Food) {
    console.log(this.menu.length);
    
    this.menu.forEach((food, index)=>{
      if (food.id == deletefood.id) {
        this.menu.splice(index,1);
        console.log(this.menu.length);
        

      }
    })
   
  }*/
}
