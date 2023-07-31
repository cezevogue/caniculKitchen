import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import {HttpService} from "../services/API/http.service";


@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent {

  constructor( private  http: HttpService) {
    this.getData()
  }


  getData()
  {
    this.http.getData("recette").subscribe({
      next: (data)=>this.recipes=data,
      error: (err)=>console.log(err),
      complete:()=>console.log('recette recup')
    });

  }

    recipes: any

    delete(id:any){
    this.http.deleteData("recette", id).subscribe({
      next:(data)=>this.getData(),
      error:(err)=>console.log(err),
      complete: ()=>console.log('supprimé')
    })


    }

    ngOnInit():void  {

     console.log(this.recipes);

    }
}
