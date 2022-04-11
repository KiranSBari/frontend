import { Component, OnInit } from '@angular/core';
import { PolicysericeService } from '../policyserice.service';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {

//Policy declared
Policy ={
  policyID:'',
  name:'',
  description:'',
  category:''
 }
  constructor(private api:PolicysericeService) { }

  insertPolicy(form:any):void{
    console.log(this.Policy.policyID);
    console.log(this.Policy.name);
    console.log(this.Policy.description);
    console.log(this.Policy.category);    
    console.log(" I am call for priting data");    
    this.api.insert(this.Policy);
    
  }


  ngOnInit(): void {
  }

}
