import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicysericeService {

  constructor(private http: HttpClient) { }

  insert(Policy: { policyID: string; name: string; description: string; category: string; }): Observable<any> {

    let url = "http://localhost:3000/api/policy";
    let new_policy = {
      "policyID": Policy.policyID,
      "name": Policy.name,
      "description": Policy.description,
      "category": Policy.category
    }
    console.log("In API call")
    var res=this.http.get<any>(url);
    console.log(res);
    return res;
  }
}

  

