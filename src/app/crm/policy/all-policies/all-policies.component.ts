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

public policies:any []|undefined;
public policy:any|undefined;

 ngOnInit(): void {
  
    this.api.getall().subscribe((data)=>{
      this.policies=data;
      console.log("Data: "+data);
    })
 }

}
