import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AsyncService} from "../services/API/async.service";
import {HttpService} from "../services/API/http.service";

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent {


wait:any
reponse:any

id: string | null ='0';
categorie = {
  titre: ''
}

constructor( private router: Router, private route: ActivatedRoute, private async: AsyncService, private http:HttpService) {

}

formulaire(form: NgForm , id: any){


  console.log(form.value.titre)
  this.http.postData("categorie", form.value).subscribe({
    next: (data:string) => console.log(data),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  });



  this.router.navigate(['categorie'])
  // console.log(test);

}

ngOnInit() {



}
}
