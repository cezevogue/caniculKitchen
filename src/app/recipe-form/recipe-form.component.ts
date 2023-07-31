import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import {HttpService} from "../services/API/http.service";


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private http:HttpService, private router: Router, private route: ActivatedRoute) {

  }
  categories: any;

  //Récupération des paramètres pour faire la modification
  id:any
  recette = {
    id:0,
    titre: '',
    description: '',
    id_categorie: '',
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',

  }

  formulaire(form: NgForm) {
    console.log(form.value.id);

    this.http.postData("recette", form.value).subscribe({next: (data)=>console.log('ok'),
      error:(err)=>console.log(err),
      complete:()=>console.log('complete recette')

    });

    this.router.navigate(['listRecipe'])
    // console.log(test);


  }

  ngOnInit() {

    this.http.getData("categorie").subscribe({
      next: (data)=> this.categories=data,
      error: (err)=> console.log(err),
      complete: ()=>console.log("success")
    });
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {



      this.http.getData("recette", this.id).subscribe({
        next: (data)=> this.recette=data,
        error: (err)=> console.log(err),
        complete: ()=>console.log("success")
      });

    }




  }

}
