import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PolicysericeService } from '../policyserice.service';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {

constructor(private api:PolicysericeService) { }

 ngOnInit(): void {
  }
 
  getallpolicies(){
    this.api.getall().subscribe((data)=>{
      console.log("Data: "+data);
    })
  }

}
