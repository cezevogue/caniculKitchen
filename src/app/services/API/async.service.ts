import { Injectable } from '@angular/core';
import {firstValueFrom, isObservable, Observable} from "rxjs";
declare let Zone:any

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }



  async waitForResponse<T>(prom:Promise<T> | Observable<T>): Promise<T>
  {

    if (isObservable(prom))
    {
      prom=firstValueFrom(prom);

    }
      const macroTask= Zone.current.scheduleMacroTask(
         `WAIT FOR-${Math.random()}`,
        ()=>{},
        {},
        ()=>{}
      );


        macroTask.invoke();
        return prom;








  }


}
