import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  insertPolicy(form:any):void{
    console.log(this.Policy.policyID);
    console.log(this.Policy.name);
    console.log(this.Policy.description);
    console.log(this.Policy.category);    
    console.log(" I am call for priting data");    
    
  }


  ngOnInit(): void {
  }

}
