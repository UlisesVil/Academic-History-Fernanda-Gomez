import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://portfolio-mail-service.herokuapp.com/historiesFer';

@Injectable({
  providedIn:'root'
})
export class DownloadService {

  constructor(
    private _http: HttpClient
  ){}

  downloadFile(file:string):Observable<any>{
    const param = new HttpParams().set('filename',file);
    const options = {
      params:param
    };
    return this._http.get(url,{...options, responseType:'blob'});
  }
}
