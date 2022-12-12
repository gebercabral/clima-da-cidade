import { HttpClient}  from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private httpClient: HttpClient) { }

  consultarCidade(cidade: string):Observable<any[]>{
    //const chave = '1b421b849da984ff8bae901509171ec2';
    const chave = '9b950c6ffcfa71a2da10d7d95bfe044d'
    const pais = 'Br'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&APPID=${chave}&units=metric`
    return this. httpClient.get(url).pipe(
     map(this.mapper),
     catchError(this.handleError)
    );
  }

  protected mapper(jsonObj: any){
    if(jsonObj){
      return jsonObj.main;
    }
  }

  protected handleError(error: any) : Observable<any>{
    return throwError(error);
  }


}
