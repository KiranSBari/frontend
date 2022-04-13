import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicysericeService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/api/policy";
  getall():Observable<any>{
    return this.http.get<any>(this.url);
  }

  insert(Policy: { policyID: string; name: string; description: string; category: string; }): Observable<any> {

    
    let new_policy = {
      "policyID": Policy.policyID,
      "polName": Policy.name,
      "description": Policy.description,
      "category": Policy.category
    }
    console.log("In API call")
    var res=this.http.post<any>(this.url,new_policy);
    //console.log(res);
    return res;
  }
}

  

