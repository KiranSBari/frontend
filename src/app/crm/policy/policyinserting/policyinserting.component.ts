import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { PolicysericeService } from '../policyserice.service';
import { AlertmessageComponent } from './alertmessage/alertmessage.component';

@Component({
  selector: 'app-policyinserting',
  templateUrl: './policyinserting.component.html',
  styleUrls: ['./policyinserting.component.css']
})
export class PolicyinsertingComponent implements OnInit {

  
//Policy declared
Policy ={
  policyID:'',
  name:'',
  description:'',
  category:''
 }
  constructor(private api:PolicysericeService) { }

  // openDialog() {
  //   this.dialog.open(AlertmessageComponent);
  // }
  
  insertPolicy(form:any):void{
    console.log(this.Policy.policyID);
    console.log(this.Policy.name);
    console.log(this.Policy.description);
    console.log(this.Policy.category);    
    console.log(" I am call for priting data");    
    this.api.insert(this.Policy).subscribe(
      (user)=>{
      console.log(user);
      alert("Policy Added");
    // this.openDialog();
      }
    );
  }

  
  ngOnInit(): void {
  }

}

