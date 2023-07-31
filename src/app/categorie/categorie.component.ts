import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient} from "@angular/common/http";
import {AsyncService} from "../services/API/async.service";
import {HttpService} from "../services/API/http.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {


  p:any
  categories: any
  constructor( private  async:AsyncService, private route:Router, private httpService:HttpService) {




  }






    delete(id:any){
      // this.http.post('http://localhost/caniculKitchen/src/app/services/API/categorie.php?action=delete&id='+id, JSON.stringify(id)).toPromise().then((response:any)=>{this.categories=response});

      this.httpService.deleteData("categorie", id).subscribe({
        next: () => this.getData(),
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });


    }



    getData()
    {

      this.httpService.getData("categorie").subscribe({
        next: (data) => this.categories=data,
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    }

    ngOnInit() :void {
      // console.log(this.categories);
      // this.p=this.http.get('http://localhost/caniculKitchen/src/app/services/API/categorie.php?action=readAll').toPromise().then((response:any)=>{this.categories=response})

    this.getData();

    }

}
